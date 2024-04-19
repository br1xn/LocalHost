import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import HeroContainer from "../components/HeroContainer";
import SearchSectionHeader from "../components/SearchSectionHeader";
import ListingItem from "../components/ListingItem";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  const onShowMoreButtonClick = useCallback(() => {
    //TODO: Please show more List items on click of this button
  }, []);

  return (
    <div className={styles.homepage}>
      <Header />
      <HeroContainer />
      <main className={styles.staysSection}>
        <SearchSectionHeader />
        <section className={styles.homes}>
          <ListingItem
            listingImage="/listing-image@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Brightwoods Cabin"
            listingSubtitle="Bridlepath, Ontario, Canada"
            rating="4.9"
            price="$658"
            showBestTime
            onListingItemContainerClick={onListingItemContainerClick}
          />
          <ListingItem
            listingImage="/image@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Urban Loft"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="4.5"
            price="$410"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-1@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Forestville Cottages"
            listingSubtitle="Simcoe, Ontario Canada"
            rating="5.0"
            price="$325"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-2@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Unionville Logde"
            listingSubtitle="Markham, Ontario Canada"
            rating="4.6"
            price="$485"
            showBestTime
          />
          <ListingItem
            listingImage="/image-3@2x.png"
            heartIcon="/heart-icon-4.svg"
            listingTitle="Missisuaga Aistream"
            listingSubtitle="Missisauga, Ontario, Canada"
            rating="4.8"
            price="$502"
            showBestTime
          />
          <ListingItem
            listingImage="/image-4@2x.png"
            heartIcon="/heart-icon-4.svg"
            listingTitle="Niagara Homes"
            listingSubtitle="Niagara, Ontario, Canada"
            rating="4.9"
            price="$655"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-5@2x.png"
            heartIcon="/heart-icon-4.svg"
            listingTitle="Sunny Estate"
            listingSubtitle="Barcort, Ontario Canada"
            rating="5.0"
            price="$320"
            showBestTime
          />
          <ListingItem
            listingImage="/image-6@2x.png"
            heartIcon="/heart-icon-4.svg"
            listingTitle="Lawrence Hills"
            listingSubtitle="Lawrence, Ontario Canada"
            rating="5.0"
            price="$350"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-7@2x.png"
            heartIcon="/heart-icon-4.svg"
            listingTitle="Simcoe Lake Lodge"
            listingSubtitle="Simcoe, Ontario, Canada"
            rating="5.0"
            price="$395"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-8@2x.png"
            heartIcon="/heart-icon-4.svg"
            listingTitle="Wasaga Beach Home"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="5.0"
            price="$385"
            showBestTime
          />
          <ListingItem
            listingImage="/image-9@2x.png"
            heartIcon="/heart-icon-4.svg"
            listingTitle="Banff Hills"
            listingSubtitle="Banff, Alberta, Canada"
            rating="5.0"
            price="$385"
            showBestTime
          />
          <ListingItem
            listingImage="/image-10@2x.png"
            heartIcon="/heart-icon-4.svg"
            listingTitle="Creemore Canada"
            listingSubtitle="Creemore, Alberta, Canada"
            rating="5.0"
            price="$385"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-11@2x.png"
            heartIcon="/heart-icon-4.svg"
            listingTitle="Kawartha Lakes"
            listingSubtitle="Kawartha, Alberta,  Canada"
            rating="5.0"
            price="$385"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-12@2x.png"
            heartIcon="/heart-icon-4.svg"
            listingTitle="Revelstoke Cabin"
            listingSubtitle="Revelstoke, Alberta, Canada"
            rating="5.0"
            price="$385"
            showBestTime
          />
          <ListingItem
            listingImage="/image-13@2x.png"
            heartIcon="/heart-icon-4.svg"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-14@2x.png"
            heartIcon="/heart-icon-4.svg"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            showBestTime={false}
          />
        </section>
        <Button
          className={styles.showMoreButton}
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
      <div className={styles.band}>
        <div className={styles.bandInner}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.policyNavigation}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
