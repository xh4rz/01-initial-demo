import styles from './MainLayout.module.css';
import Head from 'next/head';
import { Navbar } from '../Navbar';

export const MainLayout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home - Harold</title>
				<meta name="description" content="Home Page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main className={styles.main}>{children}</main>
		</div>
	);
};
