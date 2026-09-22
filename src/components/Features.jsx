import "./Features.css";

function Features() {
  const features = [
    {
      icon: "🏠",
      title: "Wide Range of Properties",
      description: "Explore homes that fit your lifestyle and budget."
    },
    {
      icon: "💰",
      title: "Best Deals",
      description: "Find competitive prices and valuable opportunities."
    },
    {
      icon: "🤝",
      title: "Expert Guidance",
      description: "Get support from experienced real estate professionals."
    },
    {
      icon: "🔑",
      title: "Hassle-Free Process",
      description: "Enjoy a smooth and simple property-buying experience."
    }
  ];

  return (
    <section className="features">
      <div className="features-heading">
        <p className="section-subtitle">WHY CHOOSE US</p>
        <h2>Everything You Need to Find Your Home</h2>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-card-icon">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;