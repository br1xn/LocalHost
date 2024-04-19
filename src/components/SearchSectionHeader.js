import "./SearchSectionHeader.css";

const SearchSectionHeader = () => {
  return (
    <div className="search-section-header">
      <div className="location-display">
        <h3 className="stays-nearby">Stays nearby:</h3>
        <h3 className="toronto-ontario">Toronto Ontario</h3>
      </div>
      <div className="layout-selection">
        <div className="layout-buttons">
          <img className="bento-menu-1-icon" alt="" src="/bento-menu1.svg" />
        </div>
        <div className="layout-buttons1">
          <img className="map-icon" alt="" src="/map.svg" />
        </div>
      </div>
    </div>
  );
};

export default SearchSectionHeader;
