import React from "react";
import styles from "./Project.module.css";
import { styled } from "@mui/material/styles";
import Demo1 from "../../assets/projects/chatcord/demo1.gif";
import Demo2 from "../../assets/projects/chatcord/demo2.gif";
import Genres from "../../assets/projects/moviesverse/genres.gif";
import TvDetails from "../../assets/projects/moviesverse/tvDetails.gif";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";
import Carousel from "react-material-ui-carousel";
import { Tabs, Tab, Typography, Box, Button } from "@mui/material";

const StyledTabs = styled((props) => (
	<Tabs
		{...props}
		TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
		centered
	/>
))({
	"& .MuiTabs-indicator": {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "transparent",
	},
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
		textTransform: "none",
		fontSize: "14px",
		fontWeight: 500,
		marginRight: theme.spacing(3),
		minHeight: "30px",
		color: "#FFFFFF",
		"&.Mui-selected": {
			color: "black",
			background: "cyan",
			borderRadius: "3px",
			padding: "0px 20px",
			minHeight: "30px",
		},
		"&.Mui-focusVisible": {
			backgroundColor: "transparent",
		},
	})
);

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
function Project() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<section id="experiences" className={styles.container}>
			<span className={styles.title}>My Experience</span>
			<div className={styles.featured}>Featured Internships</div>
			<Box sx={{ width: "100%", bgcolor: "transparent" }}>
				<StyledTabs
					value={value}
					onChange={handleChange}
					aria-label="styled tabs example"
				>
					<StyledTab label="PixelStat Esolutions Pvt. Ltd." />
					<StyledTab label="Famepilot Internet Pvt. Ltd." />
					<StyledTab label="BMC Software" />
					<StyledTab label="OkCredit" />
					<StyledTab label="Cisco Systems" />
				</StyledTabs>
			</Box>
			<TabPanel value={value} index={0}>
				<div className={styles.carouselDiv}>
					<div className={styles.leftDiv}>
						<div>
							<div className={styles.projectTitle}>Pixelstats Esolutions Pvt. Ltd.</div>
							<div className={styles.projectDesc}>
								Full Stack Developer Intern
							</div>
						</div>
						<div className={styles.featuresDiv}>
							<h3>Work</h3>
							<p>I have worked on a government project for scheme registration using a python-django framework as a tool for backend development. I have also worked on small modules like creating pdf automated application and email, message verification application.</p>
						</div>
						
					</div>
					<div className={styles.imgsDiv}>
						
					</div>
				</div>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<div className={styles.carouselDiv}>
					<div className={styles.leftDiv}>
						<div>
							<div className={styles.projectTitle}>Famepilot Internet Pvt. Ltd.</div>
							<div className={styles.projectDesc}>
								Backend Developer Intern
							</div>
						</div>
						<div className={styles.featuresDiv}>
							<h3>Work</h3>
							<p>I have worked as a backend developer to provide RESTFUL APIs according to business requirement using Django rest framework. Also to debug the the application and resolve the problem by optimistic approach. Share some good and innovative ideas for business from backend point of view.</p>
						</div>
						
					</div>
					<div className={styles.imgsDiv}>
						
					</div>
				</div>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<div className={styles.carouselDiv}>
					<div className={styles.leftDiv}>
						<div>
							<div>
								<div className={styles.projectTitle}>BMC Software</div>
								<div className={styles.projectDesc}>
									R & D Engineer Intern
								</div>
							</div>
						</div>
						<div className={styles.featuresDiv}>
							<h3>Work</h3>
							<p>I have worked on a project titled "Intelligent Database Patch Download and Wrapper Creation". Here I have contributed on creating automated scripts for downloading patch wrapper of Oracle.</p>
						</div>

						
					</div>
					<div className={styles.imgsDiv}>
						{/* <img src={Genres} alt="login" className={styles.img} />
						<img src={TvDetails} alt="chat" className={styles.img} /> */}
					</div>
				</div>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<div className={styles.carouselDiv}>
					<div className={styles.leftDiv}>
						<div>
							<div className={styles.projectTitle}>OkCredit</div>
							<div className={styles.projectDesc}>
								Python Developer Intern
							</div>
						</div>
						<div className={styles.featuresDiv}>
							<h3>Work</h3>
							<p>I have worked on automating the requirement of business using Python Scripts and working on the backend part using GO language.</p>
						</div>
						
					</div>
					<div className={styles.imgsDiv}>
						{/* <img src={Genres} alt="login" className={styles.img} />
						<img src={TvDetails} alt="chat" className={styles.img} /> */}
					</div>
				</div>
			</TabPanel>
			<TabPanel value={value} index={4}>
				<div className={styles.carouselDiv}>
					<div className={styles.leftDiv}>
						<div>
							<div className={styles.projectTitle}>Cisco Systems</div>
							<div className={styles.projectDesc}>
								Software Engineer Intern
							</div>
						</div>
						<div className={styles.featuresDiv}>
							<h3>Work</h3>
							<p>Currently working!!</p>
						</div>
						
					</div>
					<div className={styles.imgsDiv}>
						{/* <img src={Genres} alt="login" className={styles.img} />
						<img src={TvDetails} alt="chat" className={styles.img} /> */}
					</div>
				</div>
			</TabPanel>
		</section>
	);
}

export default Project;
