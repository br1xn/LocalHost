import Header1 from "../components/Header1";
import Form from "../components/Form";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <Header1
        notifications="/notifications2@2x.png"
        avatar="/avatar2@2x.png"
        showLoginSection={false}
      />
      <main className="login-sections">
        <div className="form-wrapper">
          <Form />
        </div>
      </main>
      <footer className="band1">
        <div className="band-child">
          <div className="localhost-inc-all-rights-res-group">
            <div className="localhost-inc-all1">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="privacy-policy-parent">
              <div className="privacy-policy1">Privacy Policy</div>
              <div className="terms-conditions1">{`Terms & Conditions`}</div>
              <div className="contact-us1">Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;
