import { useState, useEffect } from "react";
import "./Testimonials.css";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/testimonials");
        
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
        setError("Could not load testimonials.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading testimonials...</div>;
  }

  if (error) {
    return <div className="text-center text-danger py-5">{error}</div>;
  }

  return (
    <section className="testimonials">
      <div className="testimonials-heading">
        <p className="section-subtitle">TESTIMONIALS</p>
        <h2>What Our Clients Say</h2>
        <p>Hear from people who found their perfect home with us.</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial._id}>
              <div className="stars">
                {"★".repeat(testimonial.rating || 5)}
              </div>
              <p className="review">"{testimonial.review}"</p>
              <h3>{testimonial.name}</h3>
              <span>{testimonial.role}</span>
            </div>
          ))
        ) : (
          <p>No testimonials found.</p>
        )}
      </div>
    </section>
  );
}

export default Testimonials;