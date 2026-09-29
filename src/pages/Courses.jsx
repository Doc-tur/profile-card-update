const courses = [
  {
    icon: "⌘",
    title: "UI/UX Design",
    text: "Learn modern interface and user experience design."
  },
  {
    icon: "▣",
    title: "Web Development",
    text: "Build professional websites using modern technologies."
  },
  {
    icon: "▤",
    title: "App Development",
    text: "Learn how to create powerful mobile applications."
  }
];

const Courses = () => {
  return (
    <section className="courses" id="services">

      <div className="courses-heading">
        <h2>Our Popular Courses for You</h2>

        <p>
          Build practical skills with courses designed
          for real-world projects.
        </p>
      </div>

      <div className="course-grid">

        {courses.map((course, index) => (
          <div className="course-card" key={index}>

            <div className="course-icon">
              {course.icon}
            </div>

            <h3>{course.title}</h3>

            <p>
              {course.text}
            </p>

            <a href="#courses">
              Learn More →
            </a>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Courses;