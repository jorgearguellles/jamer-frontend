import React from "react";
import styles from "./Header.module.css";

import logo from "../../img/logo.png";

const Header = () => {
	return (
		<nav className={styles.nav}>
			<img className={styles.img} src={logo} alt="Logo JAMER" />
			<p className={styles.p}>Documentación</p>
		</nav>
	);
};

export default Header;
