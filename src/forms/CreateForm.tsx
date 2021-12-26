import { SubmitHandler, useForm } from "react-hook-form";
import { emailPattern, postalCodePattern } from "../App/constants/patterns";
import { Incentronaut } from "../App/types";
import Form from "../components/Form/Form";
import Textfield from "../components/Textfield/Textfield";

const Create = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Incentronaut>();

	const onSubmit: SubmitHandler<Incentronaut> = (data) => console.log(data);

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Textfield
				placeholder="Voorletters"
				error={errors?.initials?.message}
				{...register("initials", {
					required: {
						value: true,
						message: "Voorletters zijn verplicht!",
					},
				})}
			/>

			<Textfield
				placeholder="Tussenvoegsel"
				error={errors?.middle_name?.message}
				{...register("middle_name")}
			/>

			<Textfield
				placeholder="Achternaam"
				error={errors?.last_name?.message}
				{...register("last_name", {
					required: {
						value: true,
						message: "Achternaam is verplicht!",
					},
				})}
			/>

			<Textfield
				placeholder="Postcode"
				error={errors?.postal_code?.message}
				{...register("postal_code", {
					required: {
						value: true,
						message: "Postcode is verplicht!",
					},
					pattern: {
						value: postalCodePattern,
						message: "Postcode is ongeldig!",
					},
				})}
			/>

			<Textfield
				min={0}
				type={"number"}
				placeholder="Huisnummer"
				error={errors?.house_number?.message}
				{...register("house_number", {
					required: {
						value: true,
						message: "Huisnummer is verplicht!",
					},
					min: {
						value: 1,
						message: "Huinummer is ongeldig",
					},
				})}
			/>

			<Textfield
				disabled
				placeholder="Straatnaam"
				error={errors?.street_name?.message}
				{...register("street_name")}
			/>

			<Textfield
				disabled
				placeholder="Stad"
				error={errors?.city?.message}
				{...register("city")}
			/>

			<Textfield
				placeholder="E-mail"
				error={errors?.email?.message}
				{...register("email", {
					required: {
						value: true,
						message: "E-mail is verplicht!",
					},
					pattern: {
						value: emailPattern,
						message: "E-mail is ongeldig!",
					},
				})}
			/>

			<button type="submit">Opslaan</button>
		</Form>
	);
};

export default Create;
