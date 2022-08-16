import { Card, Container } from "@mui/material";
import { Buttons } from "../components/Buttons";
import { Display } from "../components/Display";

export function Calculator() {
  return (
    <Container>
      <h1>Calculator</h1>
      <Card>
        <Display value={100} />
        <Buttons />
      </Card>
    </Container>
  );
}
