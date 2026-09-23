import { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/hero");
        if (!response.ok) {
          throw new Error("Failed to fetch hero content");
        }
        const data = await response.json();
        setHeroData(data);
      } catch (err) {
        console.error("Error fetching hero data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  // Fallback default values if database hasn't loaded or is empty
  const hero = heroData || {
    subtitle: "FIND YOUR PERFECT HOME",
    title: "Discover A Place\nYou’ll Love To Live",
    description: "Explore a wide range of beautiful properties, from modern apartments to luxurious homes, and find the perfect space for your next chapter.",
    buttonText: "Browse Properties →",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  };

  if (loading) {
    return <section className="hero"><p>Loading hero section...</p></section>;
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">{hero.subtitle}</p>

        {/* Split newline characters (\n) into line breaks if present */}
        <h1>
          {hero.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < hero.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h1>

        <p className="hero-description">{hero.description}</p>

        <button className="hero-btn">{hero.buttonText}</button>
      </div>

      <div className="hero-image">
        <img src={hero.image} alt="Hero banner" />
      </div>
    </section>
  );
}

export default Hero;