import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Homeowner",
      review:
        "Havyn made finding our dream home incredibly easy. The team was professional and supportive throughout the process.",
      rating: 5
    },
    {
      name: "Priya Mehta",
      role: "Property Buyer",
      review:
        "The entire experience was smooth and transparent. I highly recommend Havyn to anyone looking for a new home.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Homeowner",
      review:
        "The team understood our requirements and helped us find a property that perfectly suited our family.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials">

      <div className="testimonials-heading">

        <p className="section-subtitle">
          TESTIMONIALS
        </p>

        <h2>What Our Clients Say</h2>

        <p>
          Hear from people who found their perfect home with us.
        </p>

      </div>

      <div className="testimonials-grid">

        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>

            <div className="stars">
              {"★".repeat(testimonial.rating)}
            </div>

            <p className="review">
              "{testimonial.review}"
            </p>

            <h3>{testimonial.name}</h3>

            <span>{testimonial.role}</span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;