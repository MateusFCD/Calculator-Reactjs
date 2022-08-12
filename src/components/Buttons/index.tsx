import Button from "@mui/material/Button";

interface PropsButtons {
  label: number | string;
}

export function Buttons(props: PropsButtons) {
  return <Button>{props.label}</Button>;
}
