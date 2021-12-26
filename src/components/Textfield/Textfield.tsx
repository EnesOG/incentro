import { TextfieldProps } from "./Textfield.types";
import * as Styled from "./Textfield.styles";
import { Input } from "../Input/Input.styles";
import Alert from "../Alert/Alert";
import { memo } from "react";

const Textfield = ({ error, ...props }: TextfieldProps) => {
	return (
		<Styled.Container>
			<Input {...props} />
			{error && <Alert>{error}</Alert>}
		</Styled.Container>
	);
};

export default memo(Textfield);
