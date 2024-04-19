import { useMemo } from "react";
import "./ReviewCard.css";

const ReviewCard = ({
  ellipse12,
  johnnyCash,
  june2023,
  prop,
  michellesPlaceWasSoGreatA,
  propLetterSpacing,
  propMinWidth,
  propMinWidth1,
}) => {
  const johnnyCashStyle = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
      minWidth: propMinWidth,
    };
  }, [propLetterSpacing, propMinWidth]);

  const june2023Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="reviewcard">
      <div className="symbol-library">
        <div className="star-cluster">
          <img
            className="star-cluster-child"
            loading="lazy"
            alt=""
            src={ellipse12}
          />
          <div className="johnny-cash-parent">
            <div className="johnny-cash" style={johnnyCashStyle}>
              {johnnyCash}
            </div>
            <div className="june-2023" style={june2023Style}>
              {june2023}
            </div>
          </div>
        </div>
        <div className="parent">
          <div className="div">{prop}</div>
          <img className="vector-icon" alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className="michelles-place-was">{michellesPlaceWasSoGreatA}</div>
    </div>
  );
};

export default ReviewCard;
