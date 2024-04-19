import "./SocialMediaLogin.css";

const SocialMediaLogin = ({ orSignUpWith, image, image1, image2 }) => {
  return (
    <div className="social-media-login">
      <div className="or-sign-up">{orSignUpWith}</div>
      <div className="social-login-container">
        <div className="social-login">
          <img className="image-icon" loading="lazy" alt="" src={image} />
          <div className="text">Google</div>
        </div>
        <div className="social-login1">
          <img className="image-icon1" alt="" src={image1} />
          <div className="text1">Facebook</div>
        </div>
        <div className="social-login2">
          <img className="image-icon2" alt="" src={image2} />
          <div className="text2">Apple</div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLogin;
