import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.ul}>
				<li className={styles.li}>
					Dirigido por:{" "}
					<a href="https://www.linkedin.com/in/miguemartelo/" target="_blank">
						Migue Martelo
					</a>
				</li>
				<li className={styles.li}>
					Diseñado por:{" "}
					<a
						href="https://www.linkedin.com/in/esteban-mongu%C3%AD-torres-88442b172/"
						target="_blank"
					>
						Esteban Mongui
					</a>
				</li>
				<li className={styles.li}>
					Maquetado por:{" "}
					<a
						href="https://www.linkedin.com/in/jorgeariasarguelles/"
						target="_blank"
					>
						Jorge Arias Argüelles
					</a>
				</li>
				<li className={styles.li}>
					Desarrollado por:{" "}
					<a href="https://www.linkedin.com/in/alejandrosin/" target="_blank">
						Alejandro Giraldo
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
