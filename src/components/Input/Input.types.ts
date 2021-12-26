import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps
	extends Omit<
		DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		"ref"
	> {}
