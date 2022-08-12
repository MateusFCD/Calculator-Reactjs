import { Card, Container } from "@mui/material";
import { Buttons } from "../components/Buttons";
import { Display } from "../components/Display";

export function Calculator() {
  return (
    <Container>
      <h1>Calculator</h1>
      <Card>
        <Display value={100}/>
        <Buttons label="AC" />
        <Buttons label="/" />
        <Buttons label={7} />
        <Buttons label={8} />
        <Buttons label={9} />
        <Buttons label="*" />
        <Buttons label={4} />
        <Buttons label={5} />
        <Buttons label={6} />
        <Buttons label="-" />
        <Buttons label={1} />
        <Buttons label={2} />
        <Buttons label={3} />
        <Buttons label="+" />
        <Buttons label={0} />
        <Buttons label="." />
        <Buttons label="=" />
      </Card>
    </Container>
  );
}
