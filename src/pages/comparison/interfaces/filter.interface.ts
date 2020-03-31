export interface InputRadioProps {
  name?: string;
  id?: string;
  value?: string;
  lable?: string;
  posTime?: number;
  time?: string;
  delta?: number;
  min?: string;
  max?: string;
  step?: string;
  refAttribute: React.Ref<HTMLInputElement>;
  units?: string;
}

export interface BodyProps {
  name?: string;
  id?: string;
  value?: string;
  lable?: string;
}

export interface ButtonProps {
  text: string;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
