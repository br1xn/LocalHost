import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.contentCardsParent}>
          <img
            className={styles.contentCardsIcon}
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className={styles.contentCardsIcon1}
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.contentCardsIcon2}
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.contentCardsIcon3}
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className={styles.contentCards}>
            <img
              className={styles.cardContentIcon}
              alt=""
              src="/card-content@2x.png"
            />
            <img
              className={styles.cardGraphicIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.brightwoodsCabinParent}>
                <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                <div className={styles.bridlepathOntarioCanada}>
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className={styles.propertyFeatures}>
              <div className={styles.ratingSummary}>
                <div className={styles.averageRating}>5.0</div>
                <img className={styles.starIcon} alt="" src="/vector-1.svg" />
              </div>
              <div className={styles.reviewCount}>
                <div className={styles.reviews}>200 Reviews</div>
              </div>
            </div>
          </div>
          <div
            className={styles.welcomeToOur}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.priceBoxParent}>
            <div className={styles.priceBox}>
              <b className={styles.sh}>$658</b>
              <div className={styles.nightWrapper}>
                <div className={styles.night}>/night</div>
              </div>
            </div>
            <div className={styles.promptContentWrapper}>
              <div className={styles.promptContent}>
                <div className={styles.icontrend}>
                  <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.leafClusters} />
                  </div>
                </div>
                <div className={styles.bestTimeToBookWrapper}>
                  <div className={styles.bestTimeTo}>Best time to Book</div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className={styles.searchFlightsButton}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00c29f",
              borderRadius: "6px",
              "&:hover": { background: "#00c29f" },
              height: 58,
            }}
          >
            Book this home
          </Button>
        </div>
        <div className={styles.hostedByParent}>
          <div className={styles.hostedBy}>Hosted by:</div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.conditionSplitter}>
              <div className={styles.michelleWard}>Michelle Ward</div>
              <div className={styles.joinedInMay}>Joined in May 2021</div>
            </div>
            <button className={styles.badgeIconParent}>
              <img className={styles.badgeIcon} alt="" src="/vector-2.svg" />
              <div className={styles.superhost}>Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
