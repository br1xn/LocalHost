import { Button } from "@mui/material";
import "./LocationAmenities.css";

const LocationAmenities = () => {
  return (
    <div className="location-amenities">
      <div className="amenities-parent">
        <h3 className="amenities">Amenities</h3>
        <div className="amenities-list">
          <div className="amenity-categories">
            <div className="amenitiessection1">
              <div className="amenity-symbols">
                <img
                  className="mdilake-icon"
                  loading="lazy"
                  alt=""
                  src="/mdilake.svg"
                />
                <div className="lakeside">Lakeside</div>
              </div>
              <div className="additional-amenities">
                <img
                  className="tablertools-kitchen-2-icon"
                  loading="lazy"
                  alt=""
                  src="/tablertoolskitchen2.svg"
                />
                <div className="kitchen">Kitchen</div>
              </div>
              <div className="property-features-icons">
                <img
                  className="tablertools-kitchen-2-icon"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolsnestcamiqoutdooroutline.svg"
                />
                <div className="security-cameras-on">
                  Security cameras on property
                </div>
              </div>
              <div className="amenity-symbols">
                <img
                  className="tablertools-kitchen-2-icon"
                  loading="lazy"
                  alt=""
                  src="/ionwifi.svg"
                />
                <div className="wifi">Wifi</div>
              </div>
            </div>
            <div className="amenitiessection2">
              <div className="amenity-symbols">
                <img
                  className="tablertools-kitchen-2-icon"
                  loading="lazy"
                  alt=""
                  src="/phcar.svg"
                />
                <div className="free-parking">Free parking</div>
              </div>
              <div className="amenity-symbols">
                <img
                  className="tablertools-kitchen-2-icon"
                  loading="lazy"
                  alt=""
                  src="/cilshower.svg"
                />
                <div className="outdoor-shower">Outdoor shower</div>
              </div>
              <div className="amenity-symbols">
                <img
                  className="tablertools-kitchen-2-icon"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolswatervocoutlinerounded.svg"
                />
                <div className="hot-water">Hot water</div>
              </div>
              <div className="amenity-symbols">
                <img
                  className="tablertools-kitchen-2-icon"
                  loading="lazy"
                  alt=""
                  src="/covidpersonalhygienehandliquidsoap.svg"
                />
                <div className="shampoo">Shampoo</div>
              </div>
            </div>
            <div className="amenitiessection3">
              <div className="amenity-symbols">
                <img
                  className="tablertools-kitchen-2-icon"
                  loading="lazy"
                  alt=""
                  src="/phfireextinguisher.svg"
                />
                <div className="fire-extinguisher">Fire Extinguisher</div>
              </div>
              <div className="amenity-symbols">
                <img
                  className="tablertools-kitchen-2-icon"
                  alt=""
                  src="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
                />
                <div className="freezer">Freezer</div>
              </div>
              <div className="amenity-symbols">
                <img
                  className="tablertools-kitchen-2-icon"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolscoffeemakeroutline.svg"
                />
                <div className="coffee-maker">Coffee Maker</div>
              </div>
              <div className="amenity-symbols">
                <img
                  className="tablertools-kitchen-2-icon"
                  loading="lazy"
                  alt=""
                  src="/mdistove.svg"
                />
                <div className="glass-stove">Glass stove</div>
              </div>
            </div>
          </div>
          <Button
            className="search-flights-button3"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#171e1d",
              fontSize: "16",
              borderColor: "#171e1d",
              borderRadius: "6px",
              "&:hover": { borderColor: "#171e1d" },
              width: 185,
              height: 48,
            }}
          >
            Show all amenities
          </Button>
        </div>
      </div>
      <div className="location-overview">
        <div className="location-map">
          <div className="map-container">
            <div className="location-details">
              <h3 className="where-youll-be">Where you’ll be</h3>
              <div className="neighborhood">
                <img className="location-pin-icon" alt="" src="/vector-3.svg" />
                <div className="the-bridle-path">The Bridle Path</div>
              </div>
            </div>
            <div className="weather">
              <div className="weather-info">
                <img
                  className="suncloud-icon"
                  loading="lazy"
                  alt=""
                  src="/suncloud.svg"
                />
                <div className="weather-info1">
                  <div className="temperature">20°C</div>
                  <div className="weather-detail">Broken clouds</div>
                </div>
              </div>
              <div className="frame-parent6">
                <div className="sun-parent">
                  <img className="sun-icon" alt="" src="/sun.svg" />
                  <div className="c-wrapper">
                    <b className="c">23°C</b>
                  </div>
                </div>
                <div className="sun-group">
                  <div className="c">Sun</div>
                  <div className="c">27 Aug</div>
                </div>
              </div>
              <div className="frame-parent6">
                <div className="sun-parent">
                  <img className="sun-icon" alt="" src="/suncloud-1.svg" />
                  <div className="c-wrapper">
                    <b className="c">22°C</b>
                  </div>
                </div>
                <div className="sun-group">
                  <div className="c">Mon</div>
                  <div className="c">28 Aug</div>
                </div>
              </div>
              <div className="frame-parent6">
                <div className="sun-parent">
                  <img className="sun-icon" alt="" src="/sun.svg" />
                  <div className="c-wrapper">
                    <b className="c">23°C</b>
                  </div>
                </div>
                <div className="sun-group">
                  <div className="c">Tue</div>
                  <div className="c">29 Aug</div>
                </div>
              </div>
              <div className="frame-parent6">
                <div className="sun-parent">
                  <img className="sun-icon" alt="" src="/suncloud-1.svg" />
                  <div className="c-wrapper">
                    <b className="c">20°C</b>
                  </div>
                </div>
                <div className="sun-group">
                  <div className="c">Wed</div>
                  <div className="c">30 Aug</div>
                </div>
              </div>
              <div className="frame-parent6">
                <div className="sun-parent">
                  <img className="sun-icon" alt="" src="/suncloud-1.svg" />
                  <div className="c-wrapper">
                    <b className="c">19°C</b>
                  </div>
                </div>
                <div className="sun-group">
                  <div className="c">Thu</div>
                  <div className="c">31 Aug</div>
                </div>
              </div>
              <div className="frame-parent6">
                <div className="sun-parent">
                  <img className="sun-icon" alt="" src="/sun.svg" />
                  <div className="c-wrapper">
                    <b className="c">24°C</b>
                  </div>
                </div>
                <div className="sun-group">
                  <div className="c">Fri</div>
                  <div className="c">1 Sep</div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="map-placeholder-icon"
            alt=""
            src="/map-placeholder@2x.png"
          />
          <img
            className="map-actions-icon"
            loading="lazy"
            alt=""
            src="/frame-92.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationAmenities;
