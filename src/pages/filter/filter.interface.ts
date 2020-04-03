export interface InputRadioProps {
  name: string;
  id: string;
  value: string;
  lable: string;
  posTime: number;
  time: string;
  delta: number;
  min: string;
  max: string;
  step: string;
  refAttribute: React.Ref<HTMLInputElement>;
  units: string;
}
