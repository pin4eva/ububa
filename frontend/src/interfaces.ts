export interface IServicesData {
	id: number;
	productTitle: string;
	productDesc: string;
	productImg: string;
}

export interface ITeamCard {
	id: number;
	img: string;
	name: string;
	position: string;
	socials: {
		linkedin: string;
		twitter: string;
	};
}
