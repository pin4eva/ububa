import Register from "../../components/Register";
import FrontLayout from "../../components/shared/FrontLayout";

const formpage = () => {
	return (
		<FrontLayout>
			<div className="formPage">
				<div className="formPageContainer">
					<div className="formPageText">
						<h2>Start your application</h2>
						<p>
							Thank you for your interest in applying to Ububa school of code &
							design. To continue your application process, please note that the
							training cost’s $120 (50k naira). Also select the course you would
							like to apply for.
						</p>
						<p>Please fill with your details</p>
					</div>
				</div>

				<Register />
				<p>
					Have any questions? Send us an email at <a>info@ububatech.org</a>
				</p>
			</div>
		</FrontLayout>
	);
};

export default formpage;
