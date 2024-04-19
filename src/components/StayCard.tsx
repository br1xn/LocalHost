import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StayCard.module.css";

export type StayCardType = {
  brightwoodsEstate?: string;
  bridlepathOntarioCanada?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propLetterSpacing?: CSSProperties["letterSpacing"];
};

const StayCard: FunctionComponent<StayCardType> = ({
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
  propLetterSpacing,
}) => {
  const favoriteIconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const bridlepathOntarioCanadaStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
    };
  }, [propLetterSpacing]);

  return (
    <div className={styles.staycard}>
      <div className={styles.favoriteIcon} style={favoriteIconStyle}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/superhost-icon.svg" />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className={styles.stayCardDetails}>
        <div className={styles.stayCardInfo}>
          <div className={styles.stayCardLocation}>
            <div className={styles.brightwoodsEstate}>{brightwoodsEstate}</div>
            <div
              className={styles.bridlepathOntarioCanada}
              style={bridlepathOntarioCanadaStyle}
            >
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className={styles.stayRating}>
            <div className={styles.emptyRatingStar}>4.8</div>
            <img
              className={styles.filledRatingStar}
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.stayPrice}>
          <div className={styles.pricePerNight}>
            <div className={styles.priceAmount}>$502</div>
            <div className={styles.night}>/night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
