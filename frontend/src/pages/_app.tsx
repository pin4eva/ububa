import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/index.scss";
import "../styles/custom.scss";
import { useApollo } from "../apollo";

function MyApp({ Component, pageProps }: AppProps) {
	const client = useApollo(pageProps.initialApolloState);
	return (
		<Fragment>
			<Head>
				<title>Ububa</title>
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
				<meta
					name="description"
					content="Official website of Joint Heirs Assembly International"
				/>
			</Head>
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</Fragment>
	);
}

export default MyApp;
