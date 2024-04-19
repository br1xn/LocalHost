import { useMemo } from "react";
import "./Footer.css";

const Footer = ({ propMargin, propMargin1, propMargin2 }) => {
  const supportStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const hostingStyle = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  const localhostStyle = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="frame-group">
          <div className="support-parent">
            <h3 className="support" style={supportStyle}>
              Support
            </h3>
            <div className="help-centre">Help Centre</div>
            <div className="aircover">AirCover</div>
            <div className="combating-discrimination">
              Combating discrimination
            </div>
            <div className="combating-discrimination">
              Supporting people with disabilities
            </div>
            <div className="combating-discrimination">Cencellation options</div>
            <div className="combating-discrimination">
              Report neighbourhood concern
            </div>
          </div>
          <div className="support-parent">
            <h3 className="hosting" style={hostingStyle}>
              Hosting
            </h3>
            <div className="local-home">Local home</div>
            <div className="cover-for-hosts">Cover for hosts</div>
            <div className="combating-discrimination">Hosting resources</div>
            <div className="community-forum">Community forum</div>
            <div className="combating-discrimination">Hosting responsibly</div>
          </div>
          <div className="support-parent">
            <h3 className="localhost" style={localhostStyle}>
              Localhost
            </h3>
            <div className="newsroom">Newsroom</div>
            <div className="new-features">New Features</div>
            <div className="careers">Careers</div>
            <div className="investres">Investres</div>
            <div className="gift-cards">Gift cards</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
