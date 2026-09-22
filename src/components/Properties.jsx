import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import "./Properties.css";

function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <section className="properties" id="properties">
      <h2>Featured Properties</h2>

      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            property={property}
          />
        ))}
      </div>
    </section>
  );
}

export default Properties;