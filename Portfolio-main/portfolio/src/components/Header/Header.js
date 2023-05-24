import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/icons/logo.svg";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Resume from "../../assets/files/sumit__resume.pdf";
function Header() {
	const [activeSection, setActiveSection] = useState("home");
	const [navbarActive, setNavbarActive] = useState(false);

	const listenScrollEvent = () => {
		if (window.scrollY >= 20) {
			setNavbarActive(true);
		} else {
			setNavbarActive(false);
		}
		const windowHeight = window.innerHeight;
		console.log(windowHeight);
		window.scrollY >= 5 * windowHeight
			? setActiveSection("contact")
			:window.scrollY >= 4 * windowHeight
			? setActiveSection("experiences")
			: window.scrollY >= 3 * windowHeight
			? setActiveSection("skills")
			: window.scrollY >= 2 * windowHeight
			? setActiveSection("projects")
			: window.scrollY >= 1 * windowHeight
			? setActiveSection("about")
			: setActiveSection("home");
	};
	useEffect(() => {
		const windowHeight = window.innerHeight;
		console.log(windowHeight);
		window.addEventListener("scroll", listenScrollEvent);
		console.log(activeSection);
	});
	return (
		<BrowserRouter>
			<div
				className={styles.container}
				style={{
					background: !navbarActive ? "transparent" : "rgba(56, 62, 69, 0.44)",
				}}
			>
				<div>
					<img src={Logo} alt="logo" className={styles.logo} />
				</div>
				<div className={styles.tabContainer}>
					<HashLink
						to="#home"
						smooth
						className={styles.tab}
						style={{ color: activeSection === "home" ? "cyan" : "white" }}
					>
						Home
					</HashLink>
					<HashLink
						to="#about"
						smooth
						className={styles.tab}
						style={{ color: activeSection === "about" ? "cyan" : "white" }}
					>
						About
					</HashLink>
					<HashLink
						to="#projects"
						smooth
						className={styles.tab}
						style={{
							color: activeSection === "projects" ? "cyan" : "white",
						}}
					>
						Projects
					</HashLink>
					<HashLink
						to="#skills"
						smooth
						className={styles.tab}
						style={{ color: activeSection === "skills" ? "cyan" : "white" }}
					>
						Skills
					</HashLink>
					<HashLink
						to="#experiences"
						smooth
						className={styles.tab}
						style={{ color: activeSection === "experiences" ? "cyan" : "white" }}
					>
						Experience
					</HashLink>
					<HashLink
						to="#contact"
						smooth
						className={styles.tab}
						style={{ color: activeSection === "contact" ? "cyan" : "white" }}
					>
						Contact
					</HashLink>
				</div>
				<a href={Resume} download>
					<button className={styles.downloadBtn}>
						<i
							class="bi bi-download"
							style={{
								marginRight: "10px",
								fontSize: "16px",
								fontWeight: "500",
							}}
						></i>
						Resume
					</button>
				</a>
			</div>
		</BrowserRouter>
	);
}

export default Header;
