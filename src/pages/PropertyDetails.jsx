import Header1 from "../components/Header1";
import FrameComponent from "../components/FrameComponent";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import ReviewSection from "../components/ReviewSection";
import SimilarStaysSection from "../components/SimilarStaysSection";
import Footer from "../components/Footer";
import "./PropertyDetails.css";

const PropertyDetails = () => {
  return (
    <div className="property-details">
      <Header1
        notifications="/notifications1@2x.png"
        avatar="/avatar1@2x.png"
        showLoginSection
      />
      <main className="frame-parent">
        <FrameComponent />
        <section className="listing-details-section">
          <ListingDescription />
          <LocationAmenities />
        </section>
        <ReviewSection />
        <SimilarStaysSection />
      </main>
      <Footer propMargin="unset" propMargin1="unset" propMargin2="unset" />
      <div className="band1">
        <div className="bar-content">
          <div className="copyright-and-legal">
            <div className="localhost-inc-all1">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="legal-links">
              <div className="privacy-policy1">Privacy Policy</div>
              <div className="terms-conditions1">{`Terms & Conditions`}</div>
              <div className="contact-us1">Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
