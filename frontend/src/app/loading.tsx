import { ClipLoader } from "react-spinners";

export default function Loading() {
	return (
		<div className="spinner">
			<ClipLoader size={70} loading={true} color="#f6921e" />
		</div>
	);
}
