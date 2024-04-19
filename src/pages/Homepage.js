import { useCallback } from "react";
import { Button } from "@mui/material";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import SearchSectionHeader from "../components/SearchSectionHeader";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import "./Homepage.css";

const Homepage = () => {
  const onShowMoreButtonClick = useCallback(() => {
    //TODO: Please show more List items on click of this button
  }, []);

  return (
    <div className="homepage">
      <Header />
      <HeroContainer />
      <main className="stays-section">
        <SearchSectionHeader />
        <CardList />
        <Button
          className="show-more-button"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#00c29f",
            fontSize: "16",
            borderColor: "#00c29f",
            borderRadius: "6px",
            "&:hover": { borderColor: "#00c29f" },
            width: 147,
            height: 48,
          }}
          onClick={onShowMoreButtonClick}
        >
          Show more
        </Button>
      </main>
      <Footer />
      <div className="band">
        <div className="band-inner">
          <div className="localhost-inc-all-rights-res-parent">
            <div className="localhost-inc-all">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="policy-navigation">
              <div className="privacy-policy">Privacy Policy</div>
              <div className="terms-conditions">{`Terms & Conditions`}</div>
              <div className="contact-us">Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
