import "./About.css";

function About() {
  const sectionsubtitle = {
    color: ' #b18a43',
    fontSize: '12px',
    letterSpacing: '1.5px',
    fontWeight: 'bold',
  }
  return (
    <section className="about">

      <div className="about-image">

        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          alt="Modern house interior"
        />

        <button className="video-btn">
          ▶ Watch Video Tour
        </button>

      </div>

      <div style={{ flex: 1 }}>

        {/* <p className="section-subtitle">
          ABOUT US
        </p> */}

        <p style={sectionsubtitle}>
          ABOUT US
        </p>

        <h2>
          We Help You Find the Right
          <br />
          Property for a Brighter Future
        </h2>

        <p>
          At Havyn, we believe a home is more than just a place —
          it's the foundation for a better tomorrow. With years
          of experience and a passion for real estate, we're here
          to guide you every step of the way.
        </p>

        <div className="about-features">
          <div className="about-feature">
            <div className="feature-icon">
            </div>
            <h3>Trusted by Thousands</h3>
            <p>
              Happy clients across the country.
            </p>
          </div>
          <div className="about-feature">
            <div className="feature-icon">
              ♢
            </div>
            <h3>Safe & Secure</h3>
            <p>
              Verified listings and secure transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;