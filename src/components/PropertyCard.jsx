import "./PropertyCard.css";

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img
        className="property-card-image"
        src={property.image}
        alt={property.title}
      />

      <div className="property-card-content">
        <h3>{property.title}</h3>

        <p className="property-location">
          {property.location}
        </p>

        <h4>
          ₹{property.price.toLocaleString("en-IN")}
        </h4>

        <div className="property-details">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.area} sq.ft</span>
        </div>

        <p className="property-type">
          {property.propertyType}
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;