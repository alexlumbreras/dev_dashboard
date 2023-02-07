import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Brand } from "./brand.svg";
import styles from "./Layout.module.scss";
import TopBarProgressByLocation from "./TopBarProgressByLocation";

export function Layout() {
	return (
		<>
			<TopBarProgressByLocation />
			<header className={styles.header}>
				<section className={styles.header__container}>
					<a href="https://codely.com">
						<Brand />
					</a>
					<Link to={`/`}>
						<h1 className={styles.app__brand}>DevDash_</h1>
					</Link>
				</section>
			</header>
			<Outlet />
		</>
	);
}
