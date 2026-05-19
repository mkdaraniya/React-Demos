import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [length, setLength] = useState(0);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) {
      str += "0123456789";
    }
    if (characters) {
      str += "!@#$%^&*()_+{}[]|:;'<>,.?/~";
    }

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numbers, characters, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, characters, passwordGenerator]);

  const copyPasswordToClickboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-10 text-orange-500 bg-gray-50">
        <h1 className="text-2xl font-bold text-center my-4">Password Generator</h1>
        <div className="w-full flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full px-4 py-2"
            ref={useRef(passwordRef)}
            readOnly
          />
          <button className="outline-none flex justify-center items-center w-12 bg-orange-500 text-white hover:bg-orange-600 cursor-pointer"
          onClick={() => copyPasswordToClickboard(password)}>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              id="numbers"
              min="0"
              max="100"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label htmlFor="numbers">Length</label>
            </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numbers"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
              className="cursor-pointer"
            />
            <label htmlFor="numbers">Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characters"
              checked={characters}
              onChange={(e) => setCharacters(e.target.checked)}
              className="cursor-pointer"
            />
            <label htmlFor="characters">Include Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
