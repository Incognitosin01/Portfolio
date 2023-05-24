import React, { useState } from "react";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";

import { DialogTitle, DialogContent, Dialog } from "@mui/material";

function App() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<div className={styles.container}>
			<Header />
			<Home />
			<About handleOpen={handleOpen} />
			<Project />
			<Skills />
			<Experience/>
			<Contact handleOpen={handleOpen} />
			<Dialog
				onClose={handleClose}
				open={open}
				className={styles.dialog}
				PaperProps={{
					style: {
						backgroundColor: "rgba(0,0,0,0.8)",
						color: "white",
						border: "1px solid black",
					},
				}}
			>
				<DialogTitle>Contact Details</DialogTitle>
				<DialogContent>
					<p>Email address : sumitmahajan131@gmail.com</p>
					<p>Contact Number : 9834603147</p>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default App;
