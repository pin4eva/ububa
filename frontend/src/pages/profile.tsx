import React, { useState } from "react";

const MemberProfile = () => {
	const [isProfileEdit, setIsProfileEdit] = useState(false);

	enum FellowshipEnum {
		CHILDREN = "Children Fellowship",
		YOUTH = "Youth Fellowship",
		TEEN = "Teen Fellowship",
		MEN = "Men's Fellowship",
		WOMEN = "Women's Fellowship",
	}
	const cellChurches = [
		"Divine",
		"Blessing",
		"Faith",
		"Grace",
		"Glory",
		"Victory",
	];
	const departments = [
		"Choir",
		"Ushering",
		"Media",
		"Prayer Band",
		"Outreach",
		"Security",
		"Sunday School",
		"Sound",
		"Protocool",
		"Children Teacher",
		"Begining Step",
		"Cell Church Teacher",
	];

	return (
		<div className="container member-profile">
			<header className="profile-header d-flex-between">
				<div></div>
				<div className="profile-notifications d-flex-center">
					<i className="fa-solid fa-bell"></i>
					<div className="profile-img_minor"></div>
				</div>
			</header>

			<main>
				<aside>
					<div className="aside-top text-center">
						<div className="profile-img_major">
							<button className="profile-img_uploader d-flex-center">
								<i className="fa-solid fa-camera"></i>
							</button>
						</div>
						<h3 className="member-name mt-3">{"Charles Clifford"}</h3>
						<p className="membership-status">{"Guest"}</p>
					</div>
					<div className="aside-main">
						<form className="form-group">
							<div>
								<label htmlFor="email">Email:</label>
								<input readOnly type="text" value={"email@gmail.com"} />
							</div>
							<div>
								<label htmlFor="phone">Phone:</label>
								<input readOnly type="text" value={"+23480123456789"} />
							</div>
							<div>
								<label htmlFor="address">Address:</label>
								<input
									readOnly
									type="text"
									value={"Joy Plaza, Rumuodara, port Harcourt"}
								/>
							</div>
							<div>
								<label htmlFor="membership">Membership:</label>
								<input
									style={{ color: "#030CE0" }}
									readOnly
									type="text"
									value={"Guest"}
								/>
							</div>
						</form>
					</div>
				</aside>

				<section>
					<div className="section-top d-flex-between">
						<h4>Profile</h4>
						<button className="edit-profile">
							<i className="fa-solid fa-pen"></i>
						</button>
					</div>

					<div className="section-main">
						<div className="parent-form-wrapper">
							<div className="form-wrapper">
								<form className="form-group">
									<div>
										<label htmlFor="name">Name:</label>
										<input readOnly type="text" value={"Charles Clifford"} />
									</div>
									<div>
										<label htmlFor="phone">Phone:</label>
										<input readOnly type="text" value={"+23480123456789"} />
									</div>
									<div>
										<label htmlFor="branch">Branch:</label>
										<input readOnly type="text" value={"Rumuodara"} />
									</div>
								</form>
							</div>
							<div className="form-wrapper">
								<form className="form-group">
									<div>
										<label htmlFor="email">Email:</label>
										<input readOnly type="text" value={"email@gmail.com"} />
									</div>
									<div>
										<label htmlFor="fellowship">Fellowship:</label>
										{/* <input readOnly type="text" value={"+23480123456789"} /> */}
										<select disabled>
											<>
												<option>{"Men's Fellowship"}</option>
												{Object.values(FellowshipEnum).map((elem) => (
													<option key={elem}>{elem}</option>
												))}
											</>
										</select>
									</div>
									<div>
										<label htmlFor="cell">Cell:</label>
										<select disabled>
											<>
												<option>{"Victory"}</option>
												{cellChurches.map((cell) => (
													<option key={cell}>{cell}</option>
												))}
											</>
										</select>
									</div>
								</form>
							</div>
						</div>

						<div className="member-address">
							<form className="form-group">
								<label htmlFor="address">House Address:</label>
								<textarea readOnly value={"email@gmail.com"} />
							</form>
						</div>

						<div>
							<form className="form-group">
								<label htmlFor="address">Departments:</label>
								<div className="member-departments">
									{departments.map((dept) => (
										<div key={dept} className="department d-flex">
											<input type="checkbox" checked />
											<label className="ms-1">{dept}</label>
										</div>
									))}
								</div>
							</form>
						</div>
					</div>
				</section>

				<footer></footer>
			</main>
		</div>
	);
};

export default MemberProfile;
