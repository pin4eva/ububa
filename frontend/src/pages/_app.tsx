import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/index.scss";
import "../styles/custom.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Head>
				<title>Ububa</title>
				<meta
					name="description"
					content="Official website of Joint Heirs Assembly International"
				/>
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
