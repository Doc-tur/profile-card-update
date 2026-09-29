import Header from "./Header";
import Hero from "./Hero";
import Reasons from "./Reasons";
import Steps from "./Steps";
import Courses from "./Courses";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Reasons />
      <Steps />
      <Courses />
    </div>
  );
};

export default LandingPage;