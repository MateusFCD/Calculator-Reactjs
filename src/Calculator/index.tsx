import { Card, Container } from "@mui/material";
import { Buttons } from "../components/Buttons";
import { Display } from "../components/Display";

export function Calculator() {
  function clearMemory() {
    console.log("limpar");
  }

  function setOperation(operation: string) {
    console.log(operation);
  }

  function addDigit(n: number) {
    console.log(n);
  }

  return (
    <Container>
      <h1>Calculator</h1>
      <Card>
        <Display value={100} />
        <Buttons label="AC" click={() => clearMemory()} />
        <Buttons label="/" click={setOperation} />
        <Buttons label={7} click={addDigit} />
        <Buttons label={8} click={addDigit} />
        <Buttons label={9} click={addDigit} />
        <Buttons label="*" click={setOperation} />
        <Buttons label={4} click={addDigit} />
        <Buttons label={5} click={addDigit} />
        <Buttons label={6} click={addDigit} />
        <Buttons label="-" click={setOperation} />
        <Buttons label={1} click={addDigit} />
        <Buttons label={2} click={addDigit} />
        <Buttons label={3} click={addDigit} />
        <Buttons label="+" click={setOperation} />
        <Buttons label={0} click={addDigit} />
        <Buttons label="." click={addDigit} />
        <Buttons label="=" click={setOperation} />
      </Card>
    </Container>
  );
}
