import { Grid } from "@mui/material";
import { Button, Operation } from "../../theme";

interface ButtonsOperationProps {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
}

export function ButtonsOperation({
  operation,
  selectOperation,
  selectedOperation,
}: ButtonsOperationProps) {
  return (
    <>
      <Operation
        selected={selectedOperation === operation}
        onClick={() => selectOperation(operation)}
      >
        {operation}
      </Operation>
    </>
  );
}
