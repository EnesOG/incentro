import axios from "axios";
import { useQuery } from "react-query";
import { AddressResponse } from "../types";

interface Props {
	postalCode: string;
	houseNumber: number;
}
const useAddressHook = ({ postalCode, houseNumber }: Props) => {
	const query = useQuery<AddressResponse>(
		[postalCode, houseNumber],
		async () => {
			const { data } = await axios.get("https://photon.komoot.io/api/", {
				params: {
					q: `Nederland ${postalCode} ${houseNumber}`,
					lang: "en",
				},
			});
			return data;
		},
		{
			enabled: false,
			select: (data) => ({ ...data, feature: data?.features?.[0] || {} }),
		}
	);
	return { ...query };
};

export default useAddressHook;
