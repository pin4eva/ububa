import * as React from "react";
import { SVGProps } from "react";

const fill = "#F2F9FF";
export enum LogoColorEnum {
	UBUBA_BLUE = "#0A1828",
	YELLOW = "#f6921e",
	BLUE = "#1E3856",
	WHITE = "#F2F9FF",
}

const LogoComp: React.FC<{
	props?: SVGProps<SVGSVGElement>;
	fill?: LogoColorEnum;
}> = ({ props, fill }) => {
	return (
		<svg
			width="2em"
			height="auto"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 46 53"
			{...props}
		>
			<path
				d="M18.254 52.598c10.516 1.754 21.972-2.208 26.11-12.329a21.58 21.58 0 0 0 1.635-8.482V25.17L18.254 52.598ZM0 .02v20.534L12.165 8.51 20.82 0 0 .02ZM46 0v12.277C35.382 22.764 19.432 38.52 8.818 49a20.024 20.024 0 0 1-6.282-6.777A19.745 19.745 0 0 1 0 33.382L33.726.072l.06.06V0H46Z"
				fill={fill}
			/>
		</svg>
	);
};

export default LogoComp;
