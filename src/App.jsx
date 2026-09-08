import { avatarImage, coverImage, profilePicture } from "./assets";
import FirstCard from "./components/FirstCard";
import ProfileCard from "./components/ProfileCard";
import Card from "./components/Card";
import Wallet from "./components/Wallet";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [toDo, setToDo] = useState("");

  const ProfileCards = [
    {
      name: "OluwatobilobaGp",
      role: "FullStack Developer",
      avatarImage: { profilePicture },
      coverImage: { coverImage },
      badge: "Dev",
      badgeImage: "☑",
      rating: "5.0",
      price: "NGN 1000,000",
      hour: "1 hour",
      period: "summer",
      dark: true,
    },
    {
      name: "Mr tobi",
      role: "FullStack Developer",
      avatarImage: { avatarImage },
      coverImage: { coverImage },
      badge: "Dev",
      badgeImage: "☑",
      rating: "5.0",
      price: "NGN 1000,000",
      hour: "1 hour",
      period: "summer",
      dark: true,
    },
  ];

  const isLogin = true;

  return (
    <>
      <h1>Emiabata Mukhtar O.</h1>
      <h2>Emiabata Mukhtar O.</h2>

      <h1>OluwatobilobaGp</h1>

      {ProfileCards.map((profilecard, index) => (
        <ProfileCard
          key={index}
          name={profilecard.name}
          role={profilecard.role}
          avatarImage={profilecard.avatarImage}
          coverImage={profilecard.coverImage}
          badge={profilecard.badge}
          badgeImage={profilecard.badgeImage}
          rating={profilecard.rating}
          price={profilecard.price}
          hour={profilecard.hour}
          period={profilecard.period}
          dark={profilecard.dark}
        />
      ))}

      {/* <FirstCard /> */}

      {isLogin && (<p>Welcome back, Emiabata Mukhtar O.</p>)}

      {isLogin ? <p> You are logged in </p> : <p> You are not logged in </p>}

      {isLogin ? <Dashboard /> : <LoginPage />}

      <button onClick={ () => { setCount(count + 1); console.log(count); } }>
        Click Me
      </button>

      <div>{count}</div>

      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

      <div>{text}</div>

      <input type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} />
      <button onClick={() => { setToDo(text); console.log(toDo); }}>
        Add ToDo
      </button>

      <div>{toDo}</div>

      <Card title="Headline">
        {/* children */}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        <FirstCard />
        
        <form action="">
          <input type="text" name="" id="" />
        </form>
      </Card>

      <Wallet />
    </>
  );
}

export default App;
