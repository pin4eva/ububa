export interface ITestimonials {
	id: string;
	name: string;
	occupation: string;
	image: string;
	testimony: string;
}
export const TestimonialsData: ITestimonials[] = [
	{
		id: "1",
		name: "Client 1",
		occupation: "Marketer",
		image: "/images/gee5.jpg",
		testimony:
			"' Everyone's raving about the new logo Ububa Technology created for us and it's already getting so much traction online! '",
	},
	{
		id: "2",
		name: "Client 2",
		occupation: "CEO Opportunists PLC",
		image: "/images/gee5.jpg",
		testimony:
			"' Everyone's raving about the new website Ububa Technology created for us and it's already getting so much traction online! '",
	},
	{
		id: "3",
		name: "Client 3",
		occupation: "Data Scientist",
		image: "/images/gee5.jpg",
		testimony:
			"' The consultancy session I had with them was life changing and amazing. I encourage everyone to check these guys out! '",
	},
];
