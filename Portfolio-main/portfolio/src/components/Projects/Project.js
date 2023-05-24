import React from "react";
import styles from "./Project.module.css";
import { styled } from "@mui/material/styles";
import Demo1 from "../../assets/projects/chatcord/med_1.jpeg";
import Demo2 from "../../assets/projects/chatcord/med_2.jpeg";
import Demo3 from "../../assets/projects/chatcord/med_3.jpeg";
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
		<section id="projects" className={styles.container}>
			<span className={styles.title}>My Projects</span>
			<div className={styles.featured}>Featured Projects</div>
			<Box sx={{ width: "100%", bgcolor: "transparent" }}>
				<StyledTabs
					value={value}
					onChange={handleChange}
					aria-label="styled tabs example"
				>
					<StyledTab label="Medicine At Your Finger Tips" />
					<StyledTab label="Travelogo" />
					<StyledTab label="Ecommerce App" />
				</StyledTabs>
			</Box>
			<TabPanel value={value} index={0}>
				<div className={styles.carouselDiv}>
					<div className={styles.leftDiv}>
						<div>
							<div className={styles.projectTitle}>Medicine At Your Finger Tips</div>
							<div className={styles.projectDesc}>
								A user friendly website to search 17000+ medicines.
							</div>
						</div>
						<div className={styles.featuresDiv}>
							<h3>Features</h3>
							<ul>
								<li>Security Login</li>
								<li>17000+ Medicines Data</li>
								<li>First Aid Info</li>
								<li>Chat Bot</li>
								<li>Responsive Design</li>
							</ul>
						</div>
						<div>
							<a href="https://github.com/Incognitosin01/Medicines_at_your_finger_tips" target="_blank">
								<Button
									variant="outlined"
									startIcon={<GitHubIcon />}
									className={styles.btn}
								>
									Github
								</Button>
							</a>

						</div>
					</div>
					<div className={styles.imgsDiv}>
						<Carousel
							navButtonsAlwaysInvisible={true}
							indicatorIconButtonProps={{
								style: {
									color: "rgba(255, 183, 66,0.3)",
									marginRight: "2px",
								},
							}}
							activeIndicatorIconButtonProps={{
								style: {
									color: "cyan",
									padding: "1px",
									border: "1px solid cyan", // 2
								},
							}}
							indicatorContainerProps={{
								style: {
									marginTop: "20px", // 5
									textAlign: "center",
									// 4
								},
							}}
						>
							<div className={styles.carouselDiv}>
								<img src={Demo1} alt="login" className={styles.img} />
							</div>
							<div className={styles.carouselDiv}>
								<img src={Demo2} alt="chat screen" className={styles.img} />
							</div>
							<div className={styles.carouselDiv}>
								<img src={Demo3} alt="chat screen" className={styles.img} />
							</div>
						</Carousel>
					</div>
				</div>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<div className={styles.carouselDiv}>
					<div className={styles.leftDiv}>
						<div>
							<div>
								<div className={styles.projectTitle}>Travelogo</div>
								<div className={styles.projectDesc}>
									A Website for searching the best travelers for your favorite destination .
								</div>
							</div>
						</div>
						<div className={styles.featuresDiv}>
							<h3>Features</h3>
							<ul>
								<li>Search for Travels</li>
								<li>Filters for travels</li>
								<li>Using Plsql</li>
								<li>Oracle DB</li>
								<li>Clean and Responsive UI</li>
							</ul>
						</div>

						<div>
							<a
								href="https://github.com/L-A-L-I-T/Moviesverse"
								target="_blank"
							>
								<Button
									variant="outlined"
									startIcon={<GitHubIcon />}
									className={styles.btn}
								>
									Github
								</Button>
							</a>

						</div>
					</div>
					<div className={styles.imgsDiv}>
						{/* <img src={Genres} alt="login" className={styles.img} />
						<img src={TvDetails} alt="chat" className={styles.img} /> */}
					</div>
				</div>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<div className={styles.carouselDiv}>
					<div className={styles.leftDiv}>
						<div>
							<div className={styles.projectTitle}>Ecommerce App</div>
							<div className={styles.projectDesc}>
								A Blockchain based Ecommerce app to buy and sell goods.
							</div>
						</div>
						<div className={styles.featuresDiv}>
							<h3>Features</h3>
							<ul>
								<li>Connect Crypto Wallet</li>
								<li>Buy Products</li>
								<li>Sell Products</li>
								<li>Clean and Responsive UI</li>
							</ul>
						</div>
						<div>
							<a
								href="https://github.com/L-A-L-I-T/BlockChainEcommerce"
								target="_blank"
							>
								<Button
									variant="outlined"
									startIcon={<GitHubIcon />}
									className={styles.btn}
								>
									Github
								</Button>
							</a>
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
