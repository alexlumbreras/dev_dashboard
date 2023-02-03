import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

import { ReactComponent as Brand } from "./brand.svg";
import styles from "./Layout.module.scss";
import TopBarProgressByLocation from "./TopBarProgressByLocation";

TopBarProgress.config({
	barColors: {
		"0": "#fff",
		"1.0": "#3cff64",
	},
	shadowBlur: 5,
});

export function Layout() {
	return (
		<>
			<TopBarProgressByLocation />
			<header className={styles.header}>
				<Link to={"/"} style={{ textDecoration: "none" }}>
					<section className={styles.header__container}>
						<Brand />
						<h1 className={styles.app__brand}>DevDash_</h1>
					</section>
				</Link>
			</header>
			<Outlet />
		</>
	);
}
