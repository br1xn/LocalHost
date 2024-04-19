import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import SocialMediaLogin from "./SocialMediaLogin";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className="form3">
      <div className="sign-in-parent">
        <h2 className="sign-in">Sign in</h2>
        <div className="form4">
          <form className="form5">
            <div className="form-fields1">
              <TextField
                className="email1"
                placeholder="Email address"
                variant="outlined"
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
              className="search-flights-button3"
              disableElevation={true}
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
  );
};

export default Form;
