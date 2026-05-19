import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Input from "./components/Input.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <h1 className="text-3xl bg-orange-500 text-white font-bold p-4 rounded-lg">
        Currency Convertor
      </h1>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-white p-3 rounded-log text-sm flex flex-col items-center border background-gray-100">
          <Input
            label="Amount to Convert"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency.toLowerCase())}
            selectedCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
          <div className="flex gap-4 mt-4">
            <button
              onClick={swap}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Swap
            </button>
          </div>
          <Input
            label="Converted Amount"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency.toLowerCase())}
            selectedCurrency={to}
            amountDisabled
          />
          <button
            onClick={convert}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
