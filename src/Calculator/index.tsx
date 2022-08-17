import { useState } from "react";
import { Button, Card, Container, Grid } from "@mui/material";
import { Buttons } from "../components/Button";

import { DisplayCalculator } from "../theme";
import { ButtonsOperation } from "../components/ButtonOperation";

export function Calculator() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const calculate = () => {
    if (!prevValue || !operation) return currentValue;

    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    let result;
    switch (operation) {
      case "/":
        result = prev / curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "+":
        result = prev + curr;
        break;
    }
    return result;
  };

  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  };

  const clear = () => {
    setPrevValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true);
  };

  const del = () => {
    setCurrentValue("0");
    setOverwrite(true);
  };

  const percent = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };

  const selectOperation = (operation: string) => {
    setPrevValue(currentValue);
    setOperation(operation);
    setOverwrite(true);
  };

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit == ".") return;
    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };

  return (
    <Container>
      <h1>Calculator</h1>
      <Card>
        <DisplayCalculator>{currentValue}</DisplayCalculator>

        <ButtonsOperation
          operation={"AC"}
          selectOperation={clear}
          selectedOperation={operation}
        />
        <ButtonsOperation
          operation={"C"}
          selectOperation={del}
          selectedOperation={operation}
        />
        <ButtonsOperation
          operation={"%"}
          selectOperation={percent}
          selectedOperation={operation}
        />
        <ButtonsOperation
          operation={"/"}
          selectOperation={selectOperation}
          selectedOperation={operation}
        />

        <Buttons digit={"7"} enterDigit={setDigit} />
        <Buttons digit={"8"} enterDigit={setDigit} />
        <Buttons digit={"9"} enterDigit={setDigit} />
        <ButtonsOperation
          operation={"*"}
          selectOperation={selectOperation}
          selectedOperation={operation}
        />
        <Buttons digit={"4"} enterDigit={setDigit} />
        <Buttons digit={"5"} enterDigit={setDigit} />
        <Buttons digit={"6"} enterDigit={setDigit} />
        <ButtonsOperation
          operation={"-"}
          selectOperation={selectOperation}
          selectedOperation={operation}
        />
        <Buttons digit={"1"} enterDigit={setDigit} />
        <Buttons digit={"2"} enterDigit={setDigit} />
        <Buttons digit={"3"} enterDigit={setDigit} />
        <ButtonsOperation
          operation={"+"}
          selectOperation={selectOperation}
          selectedOperation={operation}
        />
        <Buttons digit={"0"} enterDigit={setDigit} />
        <Buttons digit={"."} enterDigit={setDigit} />
        <Button
          disableElevation={true}
          variant="contained"
          onClick={equals}
          sx={{
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#ccc",
            },
          }}
        >
          =
        </Button>
      </Card>
    </Container>
  );
}
