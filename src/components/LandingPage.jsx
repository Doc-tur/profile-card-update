import Header from "./Header";
import Heros from "./Heros";
import Reasons from "./Reasons";
import Steps from "./Steps";
import Courses from "./Courses";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Heros />
      <Reasons />
      <Steps />
      <Courses />
    </div>
  );
};

export default LandingPage;
