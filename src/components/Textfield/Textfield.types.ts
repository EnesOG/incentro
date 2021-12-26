import { InputProps } from "../Input/Input.types";

export interface TextfieldProps extends InputProps {
  error?:string;
  isLoading?: boolean;
}