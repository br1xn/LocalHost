import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img className="logo-icon" loading="lazy" alt="" src="/logo@2x.png" />
        <div className="nav-links">
          <div className="home">Home</div>
          <div className="stays">Stays</div>
          <div className="become-a-host">Become a host</div>
        </div>
        <div className="login-section">
          <img
            className="notifications-icon"
            loading="lazy"
            alt=""
            src="/notifications@2x.png"
          />
          <img
            className="avatar-icon"
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
