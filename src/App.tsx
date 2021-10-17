import React, { useState } from "react";
import "./App.css";
import { Input, Row, Select } from "antd";

import "antd/dist/antd.css";
import "./index.css";
import "./style.css";

const App: React.FC = () => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [result, setResult] = useState(0);

  function handleChangeNumber1(value: number) {
    setNumber1(value);
  }

  function handleChangeNumber2(value: number) {
    setNumber2(value);
  }

  function handleChangeOperation(value: string) {
    switch (value) {
      case "+":
        return setResult(number1 + number2);
      case "-":
        return setResult(number1 - number2);
      case "*":
        return setResult(number1 * number2);
      case "/":
        return setResult(number1 / number2);
    }
  }

  const optionsOperation = [
    { value: "+", label: "(+) adição" },
    { value: "-", label: "(-) subtração" },
    { value: "*", label: "(*) multiplicação" },
    { value: "/", label: "(/) divisão" },
  ];

  return (
    <div className="body">
      <div className="container">
        <div className="input">
          <Row>
            <div>Número 1:</div>
            <Input
              type="number"
              onChange={(e) => handleChangeNumber1(e.target.valueAsNumber)}
            />
          </Row>

          <Row>
            <div>Número 2:</div>
            <Input
              type="number"
              onChange={(e) => handleChangeNumber2(e.target.valueAsNumber)}
            />
          </Row>

          <Row>
            <div>Escolha a operação desejada:</div>
            <Select
              onChange={handleChangeOperation}
              style={{ width: "100%" }}
              options={optionsOperation}
            />
          </Row>

          <Row style={{ marginTop: "30px" }}>
            <h3>{`O resultado é: ${result}`}</h3>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default App;
