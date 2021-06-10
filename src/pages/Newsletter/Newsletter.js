import menuicon from "./assets/menu.svg";
import profile from "./assets/profile2.jpeg";
import unhide from "./assets/unhide.svg";
import arrow from "./assets/arrow.svg";
import twitter from "./assets/Twitter.svg";
import facebook from "./assets/Facebook.svg";
import youtube from "./assets/YouTube.svg";
import "./App.scss";

function Newsletter() {
	return (
		<div id="newsletter">
			<div className="container">
				<div class="header">
					<div class="section-1">
						<div class="menu">
							<img class="menu" src={menuicon} alt="menu" />
						</div>
						<div class="logo">Crowdfund.</div>
					</div>
					<div class="section-2">
						<div class="profile">
							<div class="box">
								<img class="profile-image" src={profile} alt="profile" />
							</div>
							<div class="profile-name">Kate B.</div>
						</div>
					</div>
				</div>
				<div class="content">
					<div class="title">
						<div class="first-title">
							<div class="text-1">Another</div>
							<div class="text-2">Annoying</div>
							<div class="text-3">Newsletter</div>
						</div>
						<div class="sub-title">
							We invite you to our next annoying newsletter.
						</div>
					</div>
					<div class="form-container">
						<div class="form-title">SIGN UP FOR FREE</div>
						<div class="sub-form-container">
							<div class="input-container">
								<input type="text" placeholder="Name"></input>
							</div>
							<div class="input-container">
								<input type="text" placeholder="Email"></input>
							</div>
							<div class="input-container">
								<input type="text" placeholder="Password"></input>
								<div class="unhide-icon">
									<img class="icon" src={unhide} alt="unhide" />
								</div>
							</div>
							<button class="sign-button">
								<div class="button-text">Sign up</div>
								<div class="arrow">
									<img class="arrow-img" src={arrow} alt="arrow" />
								</div>
							</button>
							<div class="terms-container">
								<div class="terms-text">
									By clicking "Sign up" i agree to our
								</div>
								<div class="terms-type">Terms of Service</div>
							</div>
						</div>
					</div>
				</div>
				<div class="footer">
					<div class="copyright-container">
						<div class="copyright-text">
							© 2019 crowdfund. All Rights Reserved
						</div>
					</div>
					<div class="footer-menu">
						<ul>
							<li class="contact">
								<a href="http//:www.google.com" class="button-text">
									CONTACT
								</a>
							</li>
							<li class="help">
								<a href="http//:www.google.com" class="button-text">
									HELP
								</a>
							</li>
							<li class="terms-of-use">
								<a href="http//:www.google.com" class="button-text">
									TERMS OF USE
								</a>
							</li>
							<li class="privacy-policy">
								<a href="http//:www.google.com" class="button-text">
									PRIVACY POLICY
								</a>
							</li>
						</ul>
					</div>
					<div class="follow-on">
						<div class="twitter">
							<img class="icon" src={twitter} alt="twitter" />
						</div>
						<div class="facebook">
							<img class="icon" src={facebook} alt="facebook" />
						</div>
						<div class="youtube">
							<img class="icon" src={youtube} alt="youtube" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Newsletter;
