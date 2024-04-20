import { useCallback, useState } from "react";
import { useCookies } from "react-cookie"
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Header1 from "../components/Header1";
import SocialMediaLogin from "../components/SocialMediaLogin";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/signup`, {
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
  }

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className="sign-up-page">
      <Header1
        notifications="/notifications1@2x.png"
        avatar="/avatar1@2x.png"
        showLoginSection={false}
      />
      <main className="login-sections">
        <div className="form-wrapper">
          <div className="form">
            <div className="account-creation">
              <h2 className="create-account">Create Account</h2>
              <div className="credentials-form">
                <form className="form1">
                  <div className="form-fields">
                    <TextField
                      className="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e => setEmail(e.target.value))}
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconaccount.svg"
                          />
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
                      className="password"
                      placeholder="Password"
                      variant="outlined"
                      type="password"
                      value={password}
                      onChange={(e => setPassword(e.target.value))}
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconpassword.svg"
                          />
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
                      className="confirm-password"
                      placeholder="Confirm password"
                      variant="outlined"
                      value={confirmPassword}
                      onChange={(e => setConfirmPassword(e.target.value))}
                      type="password"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconpassword-1.svg"
                          />
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
                    className="search-flights-button"
                    disableElevation={true}
                    onClick={signUp}
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
                    Sign up
                  </Button>
                </form>
              </div>
              <div className="account-creation-inner">
                <div className="frame-child" />
              </div>
              <SocialMediaLogin
                orSignUpWith="Or sign up with"
                image="/image1@2x.png"
                image1="/image-15@2x.png"
                image2="/image-21@2x.png"
              />
            </div>
            <div
              className="i-already-have-container"
              onClick={onIAlreadyHaveClick}
            >
              <span>{`I already have an account. `}</span>
              <span className="login">Login</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="band2">
        <div className="footer-content">
          <div className="footer-details">
            <div className="localhost-inc-all2">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="footer-links">
              <div className="privacy-policy2">Privacy Policy</div>
              <div className="terms-conditions2">{`Terms & Conditions`}</div>
              <div className="contact-us2">Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
