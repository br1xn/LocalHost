import "./Header1.css";

const Header1 = ({ notifications, avatar, showLoginSection }) => {
  return (
    <header className="header1">
      <div className="header-content1">
        <img className="logo-icon1" loading="lazy" alt="" src="/logo1.svg" />
        <div className="nav-links1">
          <div className="home1">Home</div>
          <div className="stays1">Stays</div>
          <div className="become-a-host1">Become a host</div>
        </div>
        {showLoginSection && (
          <div className="login-section1">
            <img
              className="notifications-icon1"
              loading="lazy"
              alt=""
              src={notifications}
            />
            <img className="avatar-icon1" loading="lazy" alt="" src={avatar} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header1;
