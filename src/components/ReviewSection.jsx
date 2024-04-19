import ReviewCard from "./ReviewCard";
import "./ReviewSection.css";

const ReviewSection = () => {
  return (
    <section className="review-section">
      <div className="reviews-parent">
        <h3 className="reviews1">Reviews</h3>
        <div className="button1">View all</div>
      </div>
      <div className="reviewcard-parent">
        <ReviewCard
          ellipse12="/ellipse-12@2x.png"
          johnnyCash="Johnny Cash"
          june2023="June 2023"
          prop="5.0"
          michellesPlaceWasSoGreatA="Michelle’s place was so great and definitely the perfect place for our long weekend. The lake is amazing!"
        />
        <ReviewCard
          ellipse12="/ellipse-12-1@2x.png"
          johnnyCash="Yuta Watanabe"
          june2023="May 2023"
          prop="4.5"
          michellesPlaceWasSoGreatA="The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended."
          propLetterSpacing="0.29px"
          propMinWidth="114px"
          propMinWidth1="64px"
        />
        <ReviewCard
          ellipse12="/ellipse-12-2@2x.png"
          johnnyCash="Shane Willis"
          june2023="December 2022"
          prop="4.8"
          michellesPlaceWasSoGreatA="A great place overall. One of the nicest place in town for sure. I will come back in the next few months with my family :)"
          propLetterSpacing="0.29px"
          propMinWidth="94px"
          propMinWidth1="104px"
        />
      </div>
    </section>
  );
};

export default ReviewSection;
