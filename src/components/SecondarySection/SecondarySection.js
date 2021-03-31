import React from "react";
import styles from "./SecondarySection.module.css";

const SecondarySection = () => {
	return (
		<div className={styles.secondarySection}>
			<div className={styles.textContainer1}>
				<h2 className={styles.h2}>Accesibilidad en la web</h2>
				<p className={styles.p}>
					Implementa principios de accesibilidad en la web, permite a los
					desarrolladores implementar esta herramienta para pasar t’extos o
					imagenes con texto a audio, de esta manera las personas con algún tipo
					de limitación visual ahora podran tener acceso al contenido de tu
					sitio web.
				</p>
			</div>
			<div className={styles.textContainer2}>
				<h2 className={styles.h2}>Fácilitar el trabajo</h2>
				<p className={styles.p}>
					Reduce los niveles de estres en tu organización, elimina las tareas
					aburridas e insignificantes como la transcripción de archivos fisicos,
					Jamer le permite a tus colaboradores hacer este tipo de trabajos más
					rápido liberando tiempos para que se realicen tareas mas productivas.
				</p>
			</div>
			<div className={styles.textContainer3}>
				<h2 className={styles.h2}>Mejora la experiencia</h2>
				<p className={styles.p}>
					Con las dos funcionalidades anteriores se puede brindar mejor
					experiencia a las personas, ya sea durante el uso de un producto
					dígital o en el trabajo, y por que no fucionar las capacidades de
					Jamer para crear nuevas experiencias.
				</p>
			</div>
		</div>
	);
};

export default SecondarySection;
