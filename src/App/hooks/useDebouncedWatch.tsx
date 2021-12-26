import { useWatch, UseWatchProps } from "react-hook-form";
import useDebounce from "./useDebounce";

interface Props extends Omit<UseWatchProps<any>, "defaultValue"> {
	defaultValue?: any;
}

function useDebouncedWatch<T = any>(props: Props): T {
	const value = useWatch(props);
	const debouncedValue = useDebounce(value, 300);
	return debouncedValue;
}

export default useDebouncedWatch;
