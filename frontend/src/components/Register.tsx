/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Register: React.FC = () => {
	return (
		<div className="register">
			<div className="regContainer">
				<div className="form">
					<form className="form1">
						<label htmlFor="fullName">Full Name</label>
						<input type="text" placeholder="Full Name" name="fullName" />
						<label htmlFor="phone">Phone</label>
						<input type="number" placeholder="Phone" name="phone" />
						<label htmlFor="location">Location</label>
						<input type="text" placeholder="Location" name="location" />
						<label htmlFor="LevelOfEducation">Level of Education</label>
						<select name="LevelOfEducation" id="LevelOfEducation">
							<option value="">Select</option>
							<option value="primary">Primary</option>
							<option value="secondary">Secondary</option>
							<option value="tetiary">Tetiary</option>
						</select>
						<label htmlFor="course">Course</label>
						<select name="course" id="course">
							<option value="">Select course</option>
							<option value="frontEnd">Mongo DB</option>
							<option value="backEnd">Javascript</option>
							<option value="fullStack">React</option>
							<option value="fullStack">React Native Dev.</option>
							<option value="fullStack">Android Dev.</option>
						</select>
					</form>
					<form className="form2">
						<label htmlFor="email">Email</label>
						<input type="text" placeholder="Email" name="email" />
						<label htmlFor="gender">Gender</label>
						<select name="gender" id="gender">
							<option value="">Select gender</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
						<label htmlFor="employmentStatus">Employment Status</label>
						<select name="employmentStatus" id="employmentStatus">
							<option value="">Select</option>
							<option value="unemployed">Unemployed</option>
							<option value="employed">Employed</option>
							<option value="selfEmployed">Self Employed</option>
						</select>
						<label htmlFor="age">Age</label>
						<input type="number" placeholder="Age" name="age" />
						<p>
							<input type="checkbox" name="checkbox" id="checkbox" />
							<span>I agree to Ububas</span>
							<Link href="/">
								<a>Terms and Conditions</a>
							</Link>
						</p>
						<button className="btn-animation">Proceed To Payment</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
