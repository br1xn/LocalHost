import StayCard from "./StayCard";
import "./SimilarStaysSection.css";

const SimilarStaysSection = () => {
  return (
    <section className="similar-stays-section">
      <div className="similar-stays-header">
        <h3 className="similar-stays">Similar stays</h3>
        <div className="button2">View all</div>
      </div>
      <div className="stay-cards">
        <StayCard
          brightwoodsEstate="Missisuaga Aistream"
          bridlepathOntarioCanada="Missisauga, Ontario, Canada"
        />
        <div className="staycard1">
          <div className="frame-parent12">
            <div className="vector-group">
              <img className="vector-icon2" alt="" src="/superhost-icon.svg" />
              <div className="superhost3">Superhost</div>
            </div>
            <img className="heart-icon3" alt="" src="/hearticon-1.svg" />
          </div>
          <div className="frame-parent13">
            <div className="frame-parent14">
              <div className="urban-loft-parent">
                <div className="urban-loft">Urban Loft</div>
                <div className="urban-loft">Urban Loft</div>
              </div>
              <div className="group">
                <div className="div1">4.8</div>
                <img className="vector-icon3" alt="" src="/star-icon.svg" />
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="parent1">
                <div className="div2">$502</div>
                <div className="night3">/night</div>
              </div>
            </div>
          </div>
        </div>
        <StayCard
          brightwoodsEstate="Forestville Cottages"
          bridlepathOntarioCanada="Simcoe, Ontario Canada"
          propBackgroundImage="url('/frame-93@3x.png')"
          propLetterSpacing="0.02em"
        />
      </div>
    </section>
  );
};

export default SimilarStaysSection;
