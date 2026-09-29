import { studentImage } from "../assets/index";

const Heros = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <div className="rating">
          <span>⭐⭐⭐⭐⭐</span>
          <small>4.9 from 1,200+ reviews</small>
        </div>

        <h1>
          Because Email
          <br />
          Is Complicated
          <br />
          Enough. 🔥
        </h1>

        <p className="hero-description">
          Try Email Finder. Build your leads database
          faster with Snov.io Email Finder. Start using
          it for free.
        </p>

        <div className="hero-actions">

          <button className="app-btn">
            <span className="apple"></span>

            <span>
              <small>Download on the</small>
              App Store
            </span>
          </button>

          <button className="watch-btn">
            <span className="play">▶️</span>
            Watch Demo
          </button>

        </div>

        <div className="statistics">

          <div>
            <strong>20M+</strong>
            <span>Verified users</span>
          </div>

          <div>
            <strong>120+</strong>
            <span>Countries</span>
          </div>

          <div>
            <strong>80+</strong>
            <span>Languages</span>
          </div>

        </div>

      </div>

      <div className="hero-image-area">

        <div className="glow-circle"></div>

        <img
          src={ studentImage }
          alt="Learn@House instructor"
          className="hero-person"
        />

        <div className="star star-one">✨</div>
        <div className="star star-two">✨</div>
        <div className="dot"></div>

      </div>

      <div className="hero-bottom-shape"></div>

    </section>
  );
};

export default Heros;