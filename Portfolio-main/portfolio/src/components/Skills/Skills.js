import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Skills.module.css";


//? Importing Logos
import C from "../../assets/logos/C.png";
import Cpp from "../../assets/logos/cpp.png";
import ReactLogo from "../../assets/logos/react.svg";
import JavaScript from "../../assets/logos/javascript.svg";
import Node from "../../assets/logos/node.svg";
import Git from "../../assets/logos/git.svg";
import Github from "../../assets/logos/github.svg";
import Sql from "../../assets/logos/sql.svg";
import MongoDb from "../../assets/logos/mongodb.svg";
import Html from "../../assets/logos/html5.svg";
import Css from "../../assets/logos/css.svg";
import Bootstrap from "../../assets/logos/bootstrap.svg";

function Skills() {
	const [data, setData] = useState();
	const fetchData = async () => {
		await axios
			.get("https://leetcode-stats-api.herokuapp.com/incognitosin007")
			.then((response) => {
				setData(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<section id="skills" className={styles.container}>
			<div className={styles.leftDiv}>
				<span className={styles.skills}>My skills</span>
				<div className={styles.leftDivTitle}>
					What My Programming Skills Included?
				</div>
				<div className={styles.logoContainer}>
					<div className={styles.logoDiv}>
						<img src={C} alt="c" width="50" />
					</div>
					<div className={styles.logoDiv}>
						<img src={Cpp} alt="cpp" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Html} alt="Html" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Css} alt="css" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Bootstrap} alt="Bootstrap" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={JavaScript} alt="JavaScript" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Git} alt="Git" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Github} alt="Github" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={ReactLogo} alt="reactLogo" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Node} alt="Node" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Sql} alt="Sql" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={MongoDb} alt="MongoDb" className={styles.logoImg} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
