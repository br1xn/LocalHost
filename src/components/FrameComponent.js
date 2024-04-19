import { Button } from "@mui/material";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="frame-container">
      <div className="frame-div">
        <img
          className="frame-item"
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className="content-cards-parent">
          <img
            className="content-cards-icon"
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className="content-cards-icon"
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className="content-cards-icon"
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className="content-cards-icon"
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className="content-cards">
            <img
              className="card-content-icon"
              alt=""
              src="/card-content@2x.png"
            />
            <img
              className="card-graphic-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className="frame-parent1">
        <div className="frame-parent2">
          <div className="frame-parent3">
            <div className="frame-parent4">
              <div className="brightwoods-cabin-parent">
                <h2 className="brightwoods-cabin">Brightwoods Cabin</h2>
                <div className="bridlepath-ontario-canada">
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className="heart-icon1"
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className="property-features">
              <div className="rating-summary">
                <div className="average-rating">5.0</div>
                <img className="star-icon1" alt="" src="/vector-1.svg" />
              </div>
              <div className="review-count">
                <div className="reviews">200 Reviews</div>
              </div>
            </div>
          </div>
          <div className="welcome-to-our">{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className="frame-parent5">
          <div className="price-box-parent">
            <div className="price-box">
              <b className="sh">$658</b>
              <div className="night-wrapper">
                <div className="night1">/night</div>
              </div>
            </div>
            <div className="prompt-content-wrapper">
              <div className="prompt-content">
                <div className="icontrend">
                  <div className="icon-parent">
                    <img className="icon" alt="" src="/icon.svg" />
                    <div className="leaf-clusters" />
                  </div>
                </div>
                <div className="best-time-to-book-wrapper">
                  <div className="best-time-to">Best time to Book</div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="search-flights-button2"
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
        <div className="hosted-by-parent">
          <div className="hosted-by">Hosted by:</div>
          <div className="ellipse-parent">
            <img
              className="frame-inner"
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className="condition-splitter">
              <div className="michelle-ward">Michelle Ward</div>
              <div className="joined-in-may">Joined in May 2021</div>
            </div>
            <button className="badge-icon-parent">
              <img className="badge-icon" alt="" src="/vector-2.svg" />
              <div className="superhost1">Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
