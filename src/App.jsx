// import { avatarImage, coverImage, profilePicture } from "./assets";
import FirstCard from "./pages/FirstCard";
import ProfileCard from "./pages/ProfileCard";
// import Card from "./components/Card";
import Wallet from "./pages/Wallet";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
// import { useState } from "react";
import Todo from "./pages/Todo";
import Checkout from "./pages/Checkout";
import { ProductCard } from "./pages/ProductCard";
import Form from "./pages/Form";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  // const ProfileCards = [
  //   {
  //     name: "OluwatobilobaGp",
  //     role: "FullStack Developer",
  //     avatarImage: { profilePicture },
  //     coverImage: { coverImage },
  //     badge: "Dev",
  //     badgeImage: "☑",
  //     rating: "5.0",
  //     price: "NGN 1000,000",
  //     hour: "1 hour",
  //     period: "summer",
  //     dark: true,
  //   },
  //   {
  //     name: "Mr tobi",
  //     role: "FullStack Developer",
  //     avatarImage: { avatarImage },
  //     coverImage: { coverImage },
  //     badge: "Dev",
  //     badgeImage: "☑",
  //     rating: "5.0",
  //     price: "NGN 1000,000",
  //     hour: "1 hour",
  //     period: "summer",
  //     dark: true,
  //   },
  // ];

  // const isLogin = true;

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/form" element={<Form />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/firstcard" element={<FirstCard />} />
        <Route path="/profilecard" element={<ProfileCard />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>

    </>
  );
}

export default App;
