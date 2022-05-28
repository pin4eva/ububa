import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/index.scss";
import "../styles/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Ububa</title>
				<meta name="description" content="Ububa Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
