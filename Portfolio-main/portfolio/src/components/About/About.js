import React from "react";
import styles from "./About.module.css";
import AboutMe from "../../assets/images/newaboutme.jpg";
function About({ handleOpen }) {
	return (
		<section className={styles.container} id="about">
			<div className={`col-4 col-sm-12 col-md-4 ${styles.imgDiv}`}>
				<img src={AboutMe} alt="my img" className={styles.img} style = {{width:"400px"}}/>
			</div>
			<div className={`${styles.rightContainer} col-6`}>
				<div style={{ marginBottom: "10px" }}>
					<span className={styles.who}>who I am</span>
				</div>
				<div className={styles.aboutme}>About me</div>
				<div className={styles.description}>
				Holla! I'm Sumit Mahajan, a software developer who loves working on backend development and solving real-time problems. I have developed a strong skill set in creating and optimizing backend systems to ensure high performance and reliability. Over the years, I have successfully delivered effective solutions to complex problems, and I am always eager to take on new challenges to expand my knowledge and expertise.

				As a backend developer, I am dedicated to staying up-to-date with the latest technologies and techniques in the field. I am committed to delivering exceptional results for my clients and employers by leveraging my experience and skills to solve their problems. I take pride in my work and always strive to achieve the best possible outcome for each project I work on.
				</div>
				<div>
					<button className={styles.hireme} onClick={handleOpen}>
						Contact Me
					</button>
				</div>
			</div>
		</section>
	);
}

export default About;
