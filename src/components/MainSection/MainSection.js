import React from "react";
import styles from "./MainSection.module.css";
import faro from "../../img/faro.png";
import bird from "../../img/bird.png";
import starts from "../../img/starts.png";

const MainSection = () => {
	return (
		<section className={styles.section}>
			<div className={styles.left}>
				<img className={styles.img} alt="Imagen del faro" src={faro} />
				<img
					className={styles.imgStarts}
					alt="Imagen de las estrellas"
					src={starts}
				/>
			</div>
			<div className={styles.right}>
				<div className={styles.birdsContainer}>
					<img
						className={styles.imgBird1}
						id="one"
						alt="Imagen de las aves"
						src={bird}
					/>
					<img
						className={styles.imgBird2}
						id="two"
						alt="Imagen de las aves"
						src={bird}
					/>
					<img
						className={styles.imgBird3}
						id="three"
						alt="Imagen de las aves"
						src={bird}
					/>
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.h1}>
						Digitalizar tus <br /> téxtos ahora es <br /> más fácil y rápido
					</h1>
					<p className={styles.p}>
						JAMER digitalizer es la herramienta que te permite <br /> convertir
						imagenes con texto a otros formatos, <br /> disponible en{" "}
						<a href="/">npm.</a>
					</p>
					<button className={styles.button} type="button">
						Ver más
					</button>
				</div>
				<ul className={styles.anchorContainer}>
					<li>
						<a href="/">Acerca del producto</a>
					</li>
					<li>
						<a href="/">JAMER para desarolladores</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default MainSection;
