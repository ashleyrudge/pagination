import menuicon from "./assets/menu.svg"
import profile from "./assets/profile-image.svg"
import Card from "./Card"
import VR from "./assets/vr.svg"
import stations from "./assets/stations.svg"
import controllers from "./assets/controlers.svg"
import comment from "./assets/comment.svg"
import view from "./assets/view.svg"
import share from "./assets/share.svg"
import dot from "./assets/Oval.svg"
import blackdot from "./assets/black-oval.svg"
import twitter from "./assets/Twitter.svg"
import facebook from "./assets/Facebook.svg"
import youtube from "./assets/YouTube.svg"
import './App.css';

function App() {
  return (
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
        <div class="cards">
        <Card 
        image={VR}
        title="Headset"
        subtitle="Fidelity first. See more 
        than ever before"
        discription="We've pushed visual, audio, and ergonomic technologies to create the best-in-class VR experience."/>

<div class="controllers">
              <div class="con-title">
              Controllers
              </div>
            <img class="con-image" src={controllers} alt="VR"/>
            <div class="con-content">
              <div class="con-sub-title">
              Your hands,
in Virtual Reality
              </div>
              <div class="con-discription">
              Designed from the ground up to enable natural interactions, high-fidelity hand presence, and long-term comfort.
              </div>
            </div>
            <div class="con-action-container">
              <div class="con-comment-container">
                <img class="icon" src={comment} alt="comment"/>
                <div class="count">349</div>
              </div>
              <div class="con-view-container">
                <img class="icon" src={view} alt="view"/>
                <div class="count">49500</div>
              </div>
              <div class="con-share-container">
                <img class="icon" src={share} alt="share"/>
              </div>
            </div>
            </div>

        <Card 
        image={stations}
        title="Base Stations"
        subtitle="Best-in-industry room-scale tracking"
        discription="The highest quality tracking has gotten even better with Base Station 2.0, now with improved range, field of view, and scalability."/>
        </div>
        <div class="slider-dots">
        <div class="dot">
            <img class="dot-image" src={dot} alt="dot"/>
          </div>
          <div class="dot">
            <img class="dot-image" src={dot} alt="dot"/>
          </div>
          <div class="dot">
            <img class="dot-image" src={blackdot} alt="dot"/>
          </div>
          <div class="dot">
            <img class="dot-image" src={dot} alt="dot"/>
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
  );
}

export default App;

