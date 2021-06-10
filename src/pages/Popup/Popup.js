import image from "./assets/image.svg";
import signal from "./assets/Mobile Signal.svg";
import wifi from "./assets/Wifi.svg";
import battery from "./assets/Battery.svg";
import arrow from "./assets/Vector.svg";
import home from "./assets/home.svg";
import games from "./assets/games.svg";
import liked from "./assets/liked.svg";
import search from "./assets/search.svg";
import profile from "./assets/profile.svg";
import backarrow from "./assets/back.svg";
import "./App.scss";

function Popup() {
	return (
		<div id="Popup">
			<div class="background">
				<img src={image} alt="image"></img>

				<div class="status-bar">
					<div class="status-bar-child">
						<div class="time">9:41</div>
						<div class="box">
							<div class="mobile-signal">
								<img src={signal} alt="mobile-signal" />
							</div>
							<div class="wifi">
								<img src={wifi} alt="wifi" />
							</div>
							<div class="battery">
								<img src={battery} alt="battery" />
							</div>
						</div>
					</div>
				</div>
				<div class="back-arrow">
					<div class="b-arrow">
						<img src={backarrow} alt="arrow" />
					</div>
				</div>
				<div class="discription">
					<div class="discription-child">
						<div class="date">
							<div>10 June 2020</div>
						</div>
						<div class="title">
							<div class="last">Last</div>
							<div class="of-us">of Us</div>
							<div class="part-2">Part II</div>
						</div>
					</div>
				</div>
				<div class="more-button">
					<div class="more-text">more</div>
					<div class="arrow">
						<img src={arrow} alt="arrow" />
					</div>
				</div>
			</div>
			<div class="tab-bar">
				<div class="home-tab">
					<div class="icon">
						<img src={home} alt="home" />
					</div>
					<div class="text">Home</div>
				</div>
				<div class="games-tab">
					<div class="icon">
						<img src={games} alt="games" />
					</div>
					<div class="text">Games</div>
				</div>
				<div class="liked-tab">
					<div class="icon">
						<img src={liked} alt="liked" />
					</div>
					<div class="text">liked</div>
				</div>
				<div class="search-tab">
					<div class="icon">
						<img src={search} alt="search" />
					</div>
					<div class="text">seach</div>
				</div>
				<div class="profile-tab">
					<div class="icon">
						<img src={profile} alt="profile" />
					</div>
					<div class="text">profile</div>
				</div>
			</div>
		</div>
	);
}

export default Popup;
