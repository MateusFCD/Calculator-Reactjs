import { Button, Triple } from "../../theme";

interface PropsButtons {
  label: number | string;
  Double?: string;
  Triple?: string;
  Operation?: string;
  click?: any;
}

export function Buttons(props: PropsButtons) {
  return (
    <Button
      onClick={(e) => props.click(props.label)}
      className={`
    ${props.Operation ? "Operation" : ""}
    ${props.Double ? "Double" : ""}
    ${props.Triple ? "Triple" : ""}
  `}
    >
      {props.label}
    </Button>
  );
}
