import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputElementType = Omit<
DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
"ref"
>


export interface Incentronaut {
  initials: string;
  middle_name?: string;
  last_name: string;
  postal_code: string;
  street_name:string;
  city: string;
  house_number: number;
  email: string
}