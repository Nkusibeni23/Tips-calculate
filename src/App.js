import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipPercentage1, setTipPercentage1] = useState(0);
  //calculate a tip
  const tip = bill * ((tipPercentage + tipPercentage1) / 2 / 100);
  // reset

  const resetForm = () => {
    setBill("");
    setTipPercentage(0);
    setTipPercentage1(0);
  };

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage percentage={tipPercentage} onSelect={setTipPercentage}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={tipPercentage1}
        onSelect={setTipPercentage1}
      >
        How did your friend like the services?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset resetForm={resetForm} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label htmlFor="bill">
        <strong>Enter Your Bill:</strong>
      </label>
      <br />
      <input
        type="number"
        id="bill"
        name="bill"
        placeholder="$0.00"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>
        <strong>{children}</strong>
      </label>
      <br />
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was Okey (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        Your Total Is ${bill + tip} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}

function Reset({ resetForm }) {
  return (
    <div>
      <button onClick={resetForm}>Reset</button>
    </div>
  );
}
