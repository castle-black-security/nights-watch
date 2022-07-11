import React, { ReactNode } from "react";
import Head from "next/head";

import styles from "../styles/Layout.module.css";

const Layout = ({ title, children }: { title: string; children?: ReactNode }) => (
	<main>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>

		<div className={styles.container}>{children}</div>
	</main>
);

export default Layout;
