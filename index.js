const PORT = 8000
const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const { MongoClient } = require('mongodb')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()



const uri = process.env.URI


//sign up
app.post('/signup', async (req, res) => {
    const client = new MongoClient(uri)
    const { email, password } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    const generateUserId = uuidv4()

    try {
        const client = new MongoClient(uri)
        const database = client.db('Localhost_data')
        const users = database.collection("users")
        const existingUser = await users.findOne({ email })

        if (existingUser) {
            console.log("User already exists. Please Log in")
            return
        }

        const sanitizedEmail = email.toLowerCase()

        const data = {
            user_id: generateUserId,
            email: sanitizedEmail,
            hashed_password: hashedPassword
        }

        const insertedUser = await users.insertOne(data)

        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn: 60 * 24
        })

        res.status(201).json({ token, userId: generateUserId })

    } catch (err) {
        console.error(err)
    } finally {
        await client.close()
    }
})

//sign in
app.post('/login', async (req, res) => {
    const client = new MongoClient(uri)
    const { email, password } = req.body

    try {
        await client.connect()
        const database = client.db("Localhost_data")
        const users = database.collection("users")

        const user = await users.findOne({ email })

        const correctPassword = await bcrypt.compare(password, user.hashed_password)

        if (user && correctPassword) {
            const token = jwt.sign(user, email, {
                expiresIn: 60 * 24
            })
            res.status(201).json({ token, userId: user.user_id })
        }
        console.log("Invalid Credentials")

    } catch (err) {
        console.error(err)
    } finally {
        await client.close()
    }
})

app.listen(PORT, () => console.log("Listening to PORT ", PORT))