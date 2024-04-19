import { useMemo } from "react";
import "./StayCard.css";

const StayCard = ({
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
  propLetterSpacing,
}) => {
  const favoriteIconStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const bridlepathOntarioCanadaStyle = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
    };
  }, [propLetterSpacing]);

  return (
    <div className="staycard">
      <div className="favorite-icon" style={favoriteIconStyle}>
        <div className="vector-parent">
          <img className="vector-icon1" alt="" src="/superhost-icon.svg" />
          <div className="superhost2">Superhost</div>
        </div>
        <div className="wrapper-heart-icon1">
          <img className="heart-icon2" alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className="stay-card-details">
        <div className="stay-card-info">
          <div className="stay-card-location">
            <div className="brightwoods-estate">{brightwoodsEstate}</div>
            <div
              className="bridlepath-ontario-canada1"
              style={bridlepathOntarioCanadaStyle}
            >
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className="stay-rating">
            <div className="empty-rating-star">4.8</div>
            <img className="filled-rating-star" alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className="stay-price">
          <div className="price-per-night1">
            <div className="price-amount">$502</div>
            <div className="night2">/night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
