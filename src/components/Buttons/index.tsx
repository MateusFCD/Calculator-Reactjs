import { Button, Triple, Double, Operation } from "../../theme";

export function Buttons() {
  function clearMemory() {
    console.log("limpar");
  }

  function setOperation(operation: any) {
    console.log(operation.target.value);
  }

  function addDigit(n: any) {
    console.log(n.target.value);
  }

  return (
    <>
      <Triple onClick={() => clearMemory()}>AC</Triple>
      <Operation onClick={setOperation} value="/">
        /
      </Operation>
      <Button onClick={addDigit} value="7">
        7
      </Button>
      <Button onClick={addDigit} value="8">
        8
      </Button>
      <Button onClick={addDigit} value="9">
        9
      </Button>
      <Operation onClick={setOperation} value="*">
        *
      </Operation>
      <Button onClick={addDigit} value="4">
        4
      </Button>
      <Button onClick={addDigit} value="5">
        5
      </Button>
      <Button onClick={addDigit} value="6">
        6
      </Button>
      <Operation onClick={setOperation} value="-">
        -
      </Operation>
      <Button onClick={addDigit} value="1">
        1
      </Button>
      <Button onClick={addDigit} value="2">
        2
      </Button>
      <Button onClick={addDigit} value="3">
        3
      </Button>
      <Operation onClick={setOperation} value="+">
        +
      </Operation>
      <Double onClick={addDigit} value="0">
        0
      </Double>
      <Button onClick={addDigit} value=".">
        .
      </Button>
      <Operation onClick={setOperation} value="=">
        =
      </Operation>
    </>
  );
}
