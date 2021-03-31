import React from "react";
import styles from "./LastSection.module.css";

import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";
import circle from "../../img/discGreen.png";

const LastSection = () => {
	return (
		<div className={styles.lastSection}>
			<div className={styles.card}>
				<img className={styles.img1} src={img1} alt="Primer servicio" />
				<img className={styles.circle} src={circle} alt="Circulo verde" />
				<p className={styles.text}>Carga la imagén que contenga texto</p>
				<p className={styles.number}>1</p>
			</div>
			<div className={styles.card}>
				<img className={styles.img2} src={img2} alt="Segundo servicio" />
				<img className={styles.circle} src={circle} alt="Circulo verde" />
				<p className={styles.text}>Selecciona el formato de salida</p>
				<p className={styles.number}>2</p>
			</div>
			<div className={styles.card}>
				<img className={styles.img3} src={img3} alt="Tercer servicio" />
				<img className={styles.circle} src={circle} alt="Circulo verde" />
				<p className={styles.text}>Inicia la digitalización</p>
				<p className={styles.number}>3</p>
			</div>
			<div className={styles.card}>
				<img className={styles.img4} src={img4} alt="Cuarto servicio" />
				<img className={styles.circle} src={circle} alt="Circulo verde" />
				<p className={styles.text}>Almacena los archivos</p>
				<p className={styles.number}>4</p>
			</div>
		</div>
	);
};

export default LastSection;
