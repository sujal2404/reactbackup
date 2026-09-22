import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <p className="hero-subtitle">
          FIND YOUR PERFECT HOME
        </p>

        <h1>
          Discover A Place
          <br />
          You’ll Love To Live
        </h1>

        <p className="hero-description">
          Explore a wide range of beautiful properties,
          from modern apartments to luxurious homes,
          and find the perfect space for your next chapter.
        </p>
        <button className="hero-btn">
          Browse Properties →
        </button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Beautiful modern house"
        />
      </div>

    </section>
  );
}

export default Hero;