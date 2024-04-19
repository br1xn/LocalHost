import "./ListingDescription.css";

const ListingDescription = () => {
  return (
    <div className="listing-description">
      <h3 className="about-this-home">About this home</h3>
      <div className="description-content">
        <div className="introduction">
          <div className="welcome-to-brightwoods-container">
            <p className="welcome-to-brightwoods">
              Welcome to Brightwoods Cabin, your idyllic retreat nestled in the
              heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the
              tranquility of nature's embrace, is designed to provide the
              ultimate relaxing getaway.
            </p>
            <p className="welcome-to-brightwoods">
              <b className="living-space">{`Living Space: `}</b>
              <span>
                This charming cabin boasts a spacious living area adorned with
                rustic decor and modern amenities. Enjoy the warmth of the
                wood-burning fireplace, relax on the plush sofas, and make
                yourself at home with our entertainment center featuring a
                flat-screen TV, WiFi, and more.
              </span>
            </p>
            <p className="welcome-to-brightwoods">
              <b className="living-space">Bedrooms:</b>
              <span>
                {" "}
                With 3 beautifully appointed bedrooms, our cabin comfortably
                accommodates up to [number of guests]. Each room is furnished
                with luxurious bedding and unique woodland-inspired touches to
                ensure a restful slumber.
              </span>
            </p>
            <p className="welcome-to-brightwoods">
              <b className="living-space">{`Kitchen & Dining:`}</b>
              <span>
                {" "}
                Our fully-equipped kitchen offers everything you need to prepare
                delicious home-cooked meals. The open dining area provides a
                welcoming space to enjoy meals with friends and family.
              </span>
            </p>
            <p className="welcome-to-brightwoods">
              <b className="living-space">Bathrooms:</b>
              <span>
                {" "}
                2 modern bathrooms stocked with fresh towels, toiletries, and
                all essential amenities add to your convenience.
              </span>
            </p>
            <p className="welcome-to-brightwoods">
              <b className="living-space">Outdoor Space:</b>
              <span>
                {" "}
                Step outside to a serene outdoor setting. Whether it's a morning
                coffee on the porch, a BBQ in the yard, or a soothing evening by
                the fire pit, the beauty of Bridlepath is at your doorstep.
              </span>
            </p>
            <p className="welcome-to-brightwoods">
              <b className="living-space">Location:</b>
              <span>
                {" "}
                Located just minutes from [local attractions, trails, dining,
                shopping], our cabin offers the perfect base to explore the best
                of the region or simply unwind in seclusion.
              </span>
            </p>
            <p className="welcome-to-brightwoods">
              <b className="living-space">Hosted with Love:</b>
              <span>
                {" "}
                We take pride in hosting our guests and are committed to making
                your stay unforgettable. We're just a call or message away
                should you need anything during your stay.
              </span>
            </p>
            <p className="come-be-our">
              Come, be our guest at [Cabin Name], and experience a piece of
              woodland serenity right here in Bridlepath, Ontario. Book now and
              make yourself at home!
            </p>
          </div>
          <div className="button">Show more</div>
        </div>
        <div className="property-amenities">
          <div className="detailscard">
            <img
              className="amenity-card-rows"
              loading="lazy"
              alt=""
              src="/frame-65.svg"
            />
            <div className="amenity-icons">
              <div className="dedicated-workspace">Dedicated workspace</div>
              <div className="a-private-room">
                A private room equipped with WiFi
              </div>
            </div>
          </div>
          <div className="detailscard">
            <img className="amenity-card-rows" alt="" src="/frame-65-1.svg" />
            <div className="amenity-icons">
              <div className="self-check-in">Self check-in</div>
              <div className="a-private-room">
                Check in with just your phone
              </div>
            </div>
          </div>
          <div className="detailscard">
            <img className="amenity-card-rows" alt="" src="/frame-65-2.svg" />
            <div className="amenity-icons">
              <div className="free-cancellation">Free cancellation</div>
              <div className="cancel-anytime">Cancel anytime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDescription;
