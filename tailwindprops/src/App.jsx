import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Features from "./Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  let family = [
    {
      name: "Milind",
      DOB: "12/12/2000",
      hobbies: ["coding", "gaming", "traveling"],
      age: 24,
      button: "Read More",
    },
    {
      name: "Bansi",
      DOB: "12/12/2000",
      hobbies: ["coding", "gaming", "traveling"],
      age: 24,
      button: "Test",
    },
  ];

  return (
    <>
      {family.map(
        (member, index) => <Features key={index} props={member}/>
      )}
    </>
  );
}

export default App;
