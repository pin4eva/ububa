export interface IServicesData {
	id: number;
	productTitle: string;
	productDesc: string;
}

export interface ITeamCard {
	id: number;
	img: string;
	name: string;
	position: string;
	socials: {
		facebook: string;
		twitter: string;
	};
}
