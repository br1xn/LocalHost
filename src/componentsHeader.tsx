import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
        <div className={styles.navLinks}>
          <div className={styles.home}>Home</div>
          <div className={styles.stays}>Stays</div>
          <div className={styles.becomeAHost}>Become a host</div>
        </div>
        <div className={styles.loginSection}>
          <img
            className={styles.notificationsIcon}
            loading="lazy"
            alt=""
            src="/notifications@2x.png"
          />
          <img
            className={styles.avatarIcon}
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
