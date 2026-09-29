import heroPerson from "../assets/hero-person.jpg";

const Steps = () => {
  return (
    <section className="steps">

      <h2>
        Follow These 3 Simple Steps to
        <br />
        Join Our Class!
      </h2>

      <div className="steps-content">

        <div className="step-list">

          <div className="step-item">
            <span>01</span>

            <div>
              <h3>Choose Best Course For You</h3>
              <p>Select a course that matches your goals.</p>
            </div>

            <b>→</b>
          </div>

          <div className="step-item">
            <span>02</span>

            <div>
              <h3>Active Learning Engagement</h3>
              <p>Learn through practical and engaging classes.</p>
            </div>

            <b>→</b>
          </div>

          <div className="step-item">
            <span>03</span>

            <div>
              <h3>Joining Course Made Easy</h3>
              <p>Start learning immediately after registration.</p>
            </div>

            <b>→</b>
          </div>

        </div>

        <div className="step-image">

          <div className="image-circle">

            <img
              src={heroPerson}
              alt="Instructor"
            />

          </div>

        </div>

        <div className="step-stats">

          <div>
            <strong>160+</strong>
            <span>Courses</span>
          </div>

          <div>
            <strong>500+</strong>
            <span>Students</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Learning Hours</span>
          </div>

          <div>
            <strong>12K</strong>
            <span>Reviews</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Steps;