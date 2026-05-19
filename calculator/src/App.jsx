import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Buttons from "./Buttons.jsx";
import Display from "./Display.jsx";
import AppContainer from "./AppContainer.jsx";
import Heading from "./Heading.jsx";

function App() {
  const [cal, setCal] = useState('');

  const handleButtonClick = (buttonText) => {
    setCal(buttonText);
    if (buttonText === "C") {
      setCal('');
    } else if (buttonText === "=") {
      const result = eval(cal);
      setCal(result);
    } else {
      const newVal = cal + buttonText;
      setCal(newVal);
    }
  };

  return (
    <>
      <div className="row">
        <Heading />

        <AppContainer>
          <Display cal={cal} />
          <Buttons onButtonClick={handleButtonClick} />
        </AppContainer>
      </div>
    </>
  );
}

export default App;
