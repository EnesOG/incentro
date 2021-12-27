import { useEffect } from "react";
import { FieldErrors, UseFormGetValues } from "react-hook-form";
import { Incentronaut } from "../types";
import useAddressHook from "./useAddressHook";
import useDebounce from "./useDebounce";

interface Props {
	errors: FieldErrors<Incentronaut>;
	getValues: UseFormGetValues<Incentronaut>;
}

function useAddressValidatorHook({
	errors: { postal_code, house_number },
	getValues,
}: Props) {
	const postalCode = getValues("postal_code");
	const houseNumber = useDebounce(getValues("house_number"), 250);
	const { refetch, ...query } = useAddressHook({ postalCode, houseNumber });

	useEffect(() => {
		if (
			postalCode &&
			houseNumber &&
			postal_code === undefined &&
			house_number === undefined
		) {
			refetch();
		}
	}, [refetch, postal_code, house_number, houseNumber, postalCode]);

	return { ...query };
}

export default useAddressValidatorHook;
