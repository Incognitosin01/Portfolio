import React from "react";
import styles from "./Footer.module.css";
import NewLetterIcon from "../../assets/icons/Newsletter.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
function Footer({ handleOpen }) {
	return (
		<BrowserRouter>
			<div className={styles.container}>
				<div className={styles.topDiv}>
					<h3>Start a Project</h3>
					<p>
						Collab with me to have fun and code together!!
					</p>
					<button onClick={handleOpen}>Contact Me</button>
				</div>
				<div
					className={`col-lg-4 col-sm-12 ${styles.titleDiv}`}
					style={{ marginRight: "10px" }}
				>
					<h2 style={{ color: "cyan" }}>Sumit Mahajan</h2>
					<div>Backend Developer  |  Problem Solver</div>
				</div>
				<div className={styles.OuterlinkDiv}>
					<div className="col-lg-4 col-sm-12">
						<h5>Useful Links</h5>
						<div className={styles.linkDiv}>
							<HashLink to="#home" smooth className={styles.link}>
								Home
							</HashLink>
							<HashLink to="#about" smooth className={styles.link}>
								About
							</HashLink>
							<HashLink to="#skills" smooth className={styles.link}>
								Skills
							</HashLink>
							<HashLink to="#projects" smooth className={styles.link}>
								Projects
							</HashLink>
							<HashLink to="#contact" smooth className={styles.link}>
								Contact
							</HashLink>
						</div>
					</div>
					<div className="col-4">
						<h5>Social Media</h5>
						<div className={styles.socialLinkDiv}>
							<a
								href="https://github.com/Incognitosin01"
								target="_blank"
								rel="noreferrer"
								className={styles.socialLink}
							>
								Github
							</a>
							<a
								href="https://www.linkedin.com/in/sumit-mahajan-a8a835196/"
								target="_blank"
								rel="noreferrer"
								className={styles.socialLink}
							>
								linkedin
							</a>
							<a
								href="https://www.instagram.com/sumit__mahajan/?hl=en"
								target="_blank"
								rel="noreferrer"
								className={styles.socialLink}
							>
								Instagram
							</a>
							
						</div>
					</div>
				</div>
				{/* <div className="col-3">
					<h5>Newsletter</h5>
					<p>Enter your email and get notified about news, of.</p>
					<div className={styles.inputContainer}>
						<input className={styles.input} placeholder="Your email address" />
						<div className={styles.iconContainer}>
							<img src={NewLetterIcon} alt="icon" className={styles.icon} />
						</div>
					</div>
				</div> */}
			</div>
		</BrowserRouter>
	);
}

export default Footer;
