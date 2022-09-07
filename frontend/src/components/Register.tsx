/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Register: React.FC = () => {
	return (
		<div className="register">
			<div className="registerContainer">
				<div className="registerContent">
					<h1 className="formH1">Register</h1>
					<form className="registerForm">
						<label htmlFor="firstName">Firstname:</label>
						<input type="text" name="firstname" id="firstname" required />
						<label htmlFor="lastName">Lastname:</label>
						<input type="text" name="lastname" id="lastname" required />
						<label htmlFor="selectCourse">Select Course:</label>
						<select name="course" id="course">
							<option value="">Select course</option>
							<option value="frontEnd">Mongo DB</option>
							<option value="backEnd">Javascript</option>
							<option value="fullStack">React</option>
							<option value="fullStack">React Native Dev.</option>
							<option value="fullStack">Android Dev.</option>
						</select>
						<label htmlFor="phoneNumber">Phone:</label>
						<input type="number" name="phonenumber" id="phoneNumber" required />
						<label htmlFor="email">Email:</label>
						<input type="text" name="email" id="email" required />
						<label htmlFor="gender">Gender:</label>
						<input type="text" name="gender" id="gender" required />

						<hr />

						<p>
							Clicking submit you agree to{" "}
							<Link href="/">
								<a>Terms & Privacy.</a>
							</Link>
						</p>

						<button>Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
