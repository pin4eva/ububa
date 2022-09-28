import Link from "next/link";
import FrontLayout from "../../components/shared/FrontLayout";

const formpage = () => {
	return (
		<FrontLayout>
			<main className="reg-page container">
				<div className="reg-page-intro text-center">
					<h2 className="section-title mb-4">Start your application</h2>
					<p>
						Thank you for your interest in applying to Ububa school of code &
						design. To continue your application process, please note that the
						training cost’s $120 (50k naira). Also select the course you would
						like to apply for.
					</p>
					<p>Please fill with your details</p>
				</div>

				<div className="reg-form-wrapper">
					<form>
						<div>
							<label htmlFor="fullName">Full Name</label>
							<input type="text" placeholder="Full Name" name="fullName" />
						</div>
						<div>
							<label htmlFor="phone">Phone</label>
							<input type="number" placeholder="Phone" name="phone" />
						</div>
						<div>
							<label htmlFor="location">Location</label>
							<input type="text" placeholder="Location" name="location" />
						</div>
						<div>
							<label htmlFor="LevelOfEducation">Level of Education</label>
							<select name="LevelOfEducation" id="LevelOfEducation">
								<option value="">Select</option>
								<option value="primary">Primary</option>
								<option value="secondary">Secondary</option>
								<option value="tetiary">Tetiary</option>
							</select>
						</div>
						<div>
							<label htmlFor="course">Course</label>
							<select name="course" id="course">
								<option value="">Select course</option>
								<option value="frontEnd">Mongo DB</option>
								<option value="backEnd">Javascript</option>
								<option value="fullStack">React</option>
								<option value="fullStack">React Native Dev.</option>
								<option value="fullStack">Android Dev.</option>
							</select>
						</div>
					</form>
					<form>
						<div>
							<label htmlFor="email">Email</label>
							<input type="text" placeholder="Email" name="email" />
						</div>
						<div>
							<label htmlFor="gender">Gender</label>
							<select name="gender" id="gender">
								<option value="">Select gender</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
							</select>
						</div>

						<div>
							<label htmlFor="employmentStatus">Employment Status</label>
							<select name="employmentStatus" id="employmentStatus">
								<option value="">Select</option>
								<option value="unemployed">Unemployed</option>
								<option value="employed">Employed</option>
								<option value="selfEmployed">Self Employed</option>
							</select>
						</div>

						<div>
							<label htmlFor="age">Age</label>
							<input type="number" placeholder="Age" name="age" />
						</div>

						<div className="ububa-terms d-flex-center">
							<input type="checkbox" name="checkbox" id="checkbox" />
							<p className="mb-0">
								I agree to Ububas
								<Link href="/">
									<a className="ms-1">Terms and Conditions</a>
								</Link>
							</p>
						</div>

						<button className=" submit-reg mt-4 mb-4">
							Proceed To Payment
						</button>
					</form>
				</div>

				<p className="text-center mt-4">
					Have any questions? Send us an email at info@ububatech.org
				</p>
			</main>
		</FrontLayout>
	);
};

export default formpage;
