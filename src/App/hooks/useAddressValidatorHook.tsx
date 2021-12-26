import { useEffect } from "react";
import { Control, FieldErrors } from "react-hook-form";
import useAddressHook from "./useAddressHook";
import useDebouncedWatch from "./useDebouncedWatch";

interface Props<T = any> {
	control: Control<T, object>;
	errors: FieldErrors<T>;
}

function useAddressValidatorHook({
	control,
	errors: { postal_code, house_number },
}: Props) {
	const postalCode = useDebouncedWatch<string>({
		control,
		name: "postal_code",
		exact: true,
	});

	const houseNumber = useDebouncedWatch<number>({
		control,
		name: "house_number",
		exact: true,
	});

	const { refetch, ...query } = useAddressHook({ postalCode, houseNumber });

	useEffect(() => {
		if (
			postalCode &&
			houseNumber &&
			postal_code === undefined &&
			house_number === undefined &&
			postalCode
		) {
			refetch();
		}
	}, [refetch, postal_code, house_number, houseNumber, postalCode]);

	return { ...query };
}

export default useAddressValidatorHook;
