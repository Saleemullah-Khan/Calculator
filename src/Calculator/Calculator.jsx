import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const clickButton = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clearDisplay = () => {
    setResult("");
  };

  const calculates  = () => {
    try {
      const calculatedResult = new Function(`return ${result}`)();
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculaor">
    <h1 className="tracking-in-contract-bck"> Calculator </h1>
      <input type="text" placeholder="0" id="answer" value={result} />
      <input type="button" value="9" className="button" onClick={clickButton} />
      <input type="button" value="8" className="button" onClick={clickButton} />
      <input type="button" value="7" className="button" onClick={clickButton} />
      <input type="button" value="6" className="button" onClick={clickButton} />
      <input type="button" value="5" className="button" onClick={clickButton} />
      <input type="button" value="4" className="button" onClick={clickButton} />
      <input type="button" value="3" className="button" onClick={clickButton} />
      <input type="button" value="2" className="button" onClick={clickButton} />
      <input type="button" value="1" className="button" onClick={clickButton} />
      <input type="button" value="." className="button" onClick={clickButton} />
      <input type="button" value="+" className="button" onClick={clickButton} />
      <input type="button" value="-" className="button" onClick={clickButton} />
      <input type="button" value="/" className="button" onClick={clickButton} />
      <input type="button" value="*" className="button" onClick={clickButton} />
      <input type="button" value="%" className="button" onClick={clickButton} />
      <input
        type="button"
        value="Clear"
        className="button"
        id="button1"
        onClick={clearDisplay}
      />
      <input type="button" value="=" className="button" id="button1" onClick={calculates} />
    </div>
  );
};

export default Calculator;