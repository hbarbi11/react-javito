import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [input, setInput] = useState(0);
  const [testtomeg, setTesttomeg] = useState(false);
  const [testmagassag, setTestmagassag] = useState(false);
  const [testtomegindex, setTestomegindex] = useState(0);

  const handleOnchange = e => {
    const num = e.target.value;
    setInput(num);
  };

  useEffect(() => {
    const tempBmi =
      parseInt(testtomeg) /
      ((parseInt(testmagassag) / 100) * (parseInt(testmagassag) / 100));
    setTestomegindex(tempBmi);
  }, [testtomeg, testmagassag]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="container" />
        <h1>Testtömeg(kg)</h1>
        <div className="row justify-content-center">
          <input
            type="text"
            className="form-control"
            onChange={e => setTesttomeg(e.target.value)}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <h1 className="container" />
        <h1>Testmagasság(cm)</h1>
        <div className="row justify-content-center">
          <input
            type="text"
            className="form-control"
            onChange={e => setTestmagassag(e.target.value)}
          />
        </div>
        <div className="row justify-content-center">
          <h1 className="text-center" />
          <h1>{testtomegindex}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
