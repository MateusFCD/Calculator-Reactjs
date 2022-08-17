import { Grid } from "@mui/material";
import { Button, Operation } from "../../theme";

interface ButtonsProps {
  digit: string;
  enterDigit: (digit: string) => void;
  xs?: number;
  gridColumn?: string;
}

export function Buttons({
  digit,
  enterDigit,
  xs = 3,
  gridColumn,
}: ButtonsProps) {
  return (
    <>
      <Button onClick={() => enterDigit(digit)}>{digit}</Button>
    </>
  );
}
