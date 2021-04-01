import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.ul}>
				<li className={styles.li}>
					Dirigido por:{" "}
					<a
						href="https://www.linkedin.com/in/rafaellagunas/"
						target="_blank"
						rel="noreferrer"
					>
						Rafael Lagunas
					</a>
				</li>
				<li className={styles.li}>
					Liderado por:{" "}
					<a
						href="https://www.linkedin.com/in/miguemartelo/"
						target="_blank"
						rel="noreferrer"
					>
						Migue Martelo
					</a>
				</li>
				<li className={styles.li}>
					Diseñado por:{" "}
					<a
						href="https://www.linkedin.com/in/esteban-mongu%C3%AD-torres-88442b172/"
						target="_blank"
						rel="noreferrer"
					>
						Esteban Mongui
					</a>
				</li>
				<li className={styles.li}>
					Maquetado por:{" "}
					<a
						href="https://www.linkedin.com/in/jorgeariasarguelles/"
						target="_blank"
						rel="noreferrer"
					>
						Jorge Arias Argüelles
					</a>
				</li>
				<li className={styles.li}>
					Desarrollado por:{" "}
					<a
						href="https://www.linkedin.com/in/alejandrosin/"
						target="_blank"
						rel="noreferrer"
					>
						Alejandro Giraldo
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
