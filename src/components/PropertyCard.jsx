import React from "react";
import { Card, Badge } from "react-bootstrap";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  return (
    <Card className="property-card h-100 border-0 shadow-sm">
      {/* Top Image */}
      <Card.Img
        variant="top"
        src={property.image}
        alt={property.title}
        className="property-card-image"
      />

      <Card.Body className="d-flex flex-column p-3">
        <Card.Title as="h3" className="fs-5 fw-bold mb-1">
          {property.title}
        </Card.Title>

        {/* Location */}
        <Card.Text className="text-muted small mb-2">
          📍 {property.location}
        </Card.Text>

        {/* Price */}
        <h4 className="property-price mb-3">
          ₹{property.price ? property.price.toLocaleString("en-IN") : "N/A"}
        </h4>

        {/* Property Specs (Beds, Baths, Sqft) */}
        <div className="d-flex justify-content-between text-secondary small border-top pt-2 mt-auto">
          <span>🛏️ {property.bedrooms} Beds</span>
          <span>🛁 {property.bathrooms} Baths</span>
          <span>📐 {property.area} sq.ft</span>
        </div>

        {/* Property Type Badge */}
        <div className="mt-2">
          <Badge bg="light" text="dark" className="border">
            {property.propertyType}
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PropertyCard;