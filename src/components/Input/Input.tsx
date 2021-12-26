import { forwardRef, memo } from "react";
import * as Styled from "./Input.styles";
import { InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <Styled.Input ref={ref} {...props} />;
});

export default memo(Input);
