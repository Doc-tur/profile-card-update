import "./Footer.css";
import { codingCourseImage, designCourseImage, learningCourseImage } from "../assets/index";

const courses = [
  {
    image: codingCourseImage,
    category: "Development",
    title: "Web Development Masterclass",
    lessons: "24 Lessons",
    students: "120 Students",
  },
  {
    image: designCourseImage,
    category: "Design",
    title: "UI/UX Design Complete Course",
    lessons: "18 Lessons",
    students: "95 Students",
  },
  {
    image: learningCourseImage,
    category: "Marketing",
    title: "Digital Marketing Fundamentals",
    lessons: "21 Lessons",
    students: "150 Students",
  },
];

function Footer() {
  return (
    <>
      {/* ================= POPULAR COURSES ================= */}
      <section className="popular-courses-section">
        <div className="popular-courses-container">

          <div className="popular-courses-heading">
            <div>
              <span className="section-small-label">
                OUR COURSES
              </span>

              <h2>
                Our Popular
                <br />
                Courses For You
              </h2>
            </div>

            <a href="#courses" className="all-courses-link">
              View All Courses
              <span>↗</span>
            </a>
          </div>

          <div className="courses-grid">
            {courses.map((course, index) => (
              <article className="course-card" key={index}>

                <div className="course-image">
                  <img src={course.image} alt={course.title} />

                  <span className="course-category">
                    {course.category}
                  </span>
                </div>

                <div className="course-content">

                  <h3>{course.title}</h3>

                  <div className="course-info">
                    <span>
                      ◷ {course.lessons}
                    </span>

                    <span>
                      ♙ {course.students}
                    </span>
                  </div>

                  <div className="course-bottom">

                    <span className="course-price">
                      $49
                    </span>

                    <button className="course-button">
                      →
                    </button>

                  </div>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">

        <div className="footer-container">

          <div className="footer-main">

            {/* BRAND */}
            <div className="footer-brand">

              <a href="/" className="footer-logo">
                <span className="footer-logo-mark">
                  E
                </span>
                <span>EDUCATION</span>
              </a>

              <p>
                Learn new skills, build your future,
                and grow with courses designed for
                real-world learning.
              </p>

              <div className="footer-socials">
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="Instagram">◎</a>
                <a href="#" aria-label="Twitter">𝕏</a>
                <a href="#" aria-label="LinkedIn">in</a>
              </div>

            </div>

            {/* COMPANY */}
            <div className="footer-column">
              <h4>Company</h4>

              <a href="#about">About Us</a>
              <a href="#courses">Courses</a>
              <a href="#teachers">Our Teachers</a>
              <a href="#contact">Contact</a>
            </div>

            {/* SUPPORT */}
            <div className="footer-column">
              <h4>Support</h4>

              <a href="#faq">FAQ</a>
              <a href="#help">Help Center</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms & Conditions</a>
            </div>

            {/* NEWSLETTER */}
            <div className="footer-newsletter">

              <h4>Stay Connected</h4>

              <p>
                Subscribe to receive the latest
                courses and learning updates.
              </p>

              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your email address"
                />

                <button type="submit">
                  →
                </button>
              </form>

            </div>

          </div>

          <div className="footer-bottom">

            <p>
              © 2026 Education. All rights reserved.
            </p>

            <p>
              Learn. Grow. Succeed.
            </p>

          </div>

        </div>

      </footer>
    </>
  );
}

export default Footer;