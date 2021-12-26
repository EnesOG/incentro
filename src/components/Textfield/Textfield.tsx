import { TextfieldProps } from "./Textfield.types";
import * as Styled from "./Textfield.styles";
import Input from "../Input/Input";
import Alert from "../Alert/Alert";
import { forwardRef, memo } from "react";

const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
	({ error, ...props }, ref) => {
		return (
			<Styled.Container>
				<Styled.Inner>
					<Input ref={ref} {...props} />
					{error && <Alert>{error}</Alert>}
				</Styled.Inner>
			</Styled.Container>
		);
	}
);

export default memo(Textfield);
