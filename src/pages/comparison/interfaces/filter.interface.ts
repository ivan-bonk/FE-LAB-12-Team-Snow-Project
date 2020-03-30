export interface InpSwitch {
  name?: string;
  refAttribute: any;
  id?: string;
  value?: string;
  lable?: string;
  posTime?: number;
  time?: string;
  delta?: number;
  min?: string;
  max?: string;
  step?: string;
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
