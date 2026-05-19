import styles from "./App.module.css";

function Buttons({onButtonClick}) {
  const buttonList = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "9", "0", ".", "="];

  return (
    <>
      {buttonList.map((button, index) => (
        <div className="col-md-4" key={index}>
          <button className={styles.buttoncss} onClick={() => onButtonClick(button)}>{button}</button>
        </div>
      ))}
    </>
  );
}

export default Buttons;
