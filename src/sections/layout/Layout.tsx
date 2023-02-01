import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import { ReactComponent as Brand } from "./brand.svg";
import styles from "./Layout.module.scss";

export function Layout() {
	return (
		<>
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
