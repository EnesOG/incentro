import { TextfieldProps } from "./Textfield.types";
import * as Styled from "./Textfield.styles";
import Input from "../Input/Input";
import Alert from "../Alert/Alert";
import { forwardRef, memo } from "react";
import Loader from "react-loader-spinner";

const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
	({ isLoading = false, error, ...props }, ref) => {
		return (
			<Styled.Container>
				<Styled.Inner>
					<Styled.Wrapper>
						<Input ref={ref} {...props} />
						{isLoading && (
							<Loader type="TailSpin" color="#00BFFF" height={20} width={20} />
						)}
					</Styled.Wrapper>
					{error && <Alert>{error}</Alert>}
				</Styled.Inner>
			</Styled.Container>
		);
	}
);

export default memo(Textfield);
