import axios from "axios";
import { useMutation } from "react-query";
import CreateForm from "../forms/CreateForm";
import { Incentronaut } from "./types";

const App = () => {
	const create = useMutation((data: Incentronaut) =>
		axios.post("http://mockbin.org/", data)
	);
	return (
		<CreateForm
			isMutating={create.isLoading}
			onCreate={(data) => create.mutate(data)}
		/>
	);
};

export default App;
