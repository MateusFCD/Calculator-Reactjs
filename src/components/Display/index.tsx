import { DisplayCalculator } from "../../theme";

interface PropsDisplay {
  value: any;
}

export function Display(props: PropsDisplay) {
  return (
    <>
      <DisplayCalculator>{props.value}</DisplayCalculator>
    </>
  );
}
