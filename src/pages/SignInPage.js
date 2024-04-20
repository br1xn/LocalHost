import { useCallback, useState } from "react";
import { useCookies } from "react-cookie"
import {
  Textfield,
  InputAdornment,
  Icon,
  IconButton,
  Button,
  TextField,
  imageListClasses,
} from "@mui/material";
import Header1 from "../components/Header1";
import Form from "../components/Form"
import SocialMediaLogin from "../components/SocialMediaLogin";
import { useNavigate } from "react-router-dom";
import "./SignInPage.css";

const SignInPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(null)

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const login = async (e) => {
    e.preventDefault()
    const response = await fetch(`${process.env.REACT_APP_SERVERURL}/login`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()
    setCookie('AuthToken', data.token)
    //if you need to identify the user by their useId for later
    setCookie('UserId', data.userId)

    navigate('/')
  }
  return (
    <div className="sign-in-page">
      <Header1
        notifications="/notifications2@2x.png"
        avatar="/avatar2@2x.png"
        showLoginSection={false}
      />
      <main className="login-sections">
        <div className="form-wrapper">
          <div className="form2">
            <div className="sign-in-parent">
              <h2 className="sign-in">Sign in</h2>
              <div className="form3">
                <form className="form4">
                  <div className="form-fields1">
                    <TextField
                      className="email1"
                      placeholder="Email address"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <img width="20px" height="20px" src="/iconaccount.svg" />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.799999999999955px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                    <TextField
                      className="password1"
                      placeholder="Password"
                      variant="outlined"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <img width="20px" height="20px" src="/iconpassword.svg" />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.799999999999955px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                  </div>
                  <Button
                    className="search-flights-button1"
                    disableElevation={true}
                    onClick={login}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#00c29f",
                      borderRadius: "6px",
                      "&:hover": { background: "#00c29f" },
                      width: 160,
                      height: 52,
                    }}
                  >
                    Sign in
                  </Button>
                </form>
              </div>
            </div>
            <div className="form-child" />
            <SocialMediaLogin
              orSignUpWith="Or sign in with"
              image="/image11@2x.png"
              image1="/image-16@2x.png"
              image2="/image-22@2x.png"
            />
            <div className="dont-have-an-container" onClick={onDontHaveAnClick}>
              <span>{`Don’t have an account yet? `}</span>
              <span className="sign-up">Sign up</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="band">
        <div className="band-inner">
          <div className="localhost-inc-all-rights-res-parent">
            <div className="localhost-inc-all">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="privacy-policy-parent">
              <div className="privacy-policy">Privacy Policy</div>
              <div className="terms-conditions">{`Terms & Conditions`}</div>
              <div className="contact-us">Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;
