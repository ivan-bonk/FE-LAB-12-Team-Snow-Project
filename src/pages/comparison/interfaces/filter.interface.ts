export interface InpSwitch {
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

export interface Body {
  name?: string;
  id?: string;
  value?: string;
  lable?: string;
}

export interface Buttons {
  text: string;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
