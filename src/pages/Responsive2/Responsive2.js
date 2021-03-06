import Navbar from "./components/Navbar";
import heroimg from "./assets/firstimg.svg"
import './responsive.scss'
import herobg from "./assets/shapes.svg"
import video from "./assets/video.svg"
import Card from "./components/Card2";
import card2 from "./assets/card2.svg"
import card1 from "./assets/card1.svg"
import morebg from "./assets/2nd-bg.svg"
import frankie from "./assets/frankie.svg"
import camile from "./assets/camile.svg"
import elayne from "./assets/elayne.svg"
import Case from "./components/Case";
import logo1 from "./assets/lastnight.svg"
import logo2 from "./assets/dragon.svg"
import logo3 from "./assets/quest.svg"
import logo4 from "./assets/radio.svg"
import logo5 from "./assets/game.svg"
import logo from "./assets/ninjalogo.svg"

function Responsive2() {
    return (
      <div class="responsive">
        <div class="section-1">
          <Navbar />
        </div>

        <div class="section-2">
          <div class="background">
            <div class="container">
            <div class="header">
              <div class="header-content">
                <div class="main">Create Stunning Email Campaigns</div>
                <div class="sub">
                  Create and launch email campaigns that captivate your
                  customers in just a few clicks.
                </div>
                <div class="header-buttons">
                  <div class="try-button">
                    <button class="try">TRY NOW</button>
                  </div>
                  <div class="demo-buttons">
                    <button class="demo">GET A DEMO</button>
                  </div>
                </div>
              </div>
              <div class="header-img">
                <img src={heroimg} alt="heroimg"></img>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="section-3">
        <div class="container">
          <div class="video-con">
            <img class="video" src={video} alt="#" />
            <div class="content">
              <div class="vid-title">Reach More Customers</div>
              <div class="learn">
                <button class="learn-button">LEARN HOW</button>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div class="section-4">
          <div class="sec4-bg">
           <div class="container">
            <div class="card-con">
              <div class="cards">
                <Card
                  image={card1}
                  content="Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end."
                  />
                <div class="card2">
                  <Card
                    image={card2}
                    content="Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools."
                    />
                </div>
              </div>
              <div class="side-con">
                <div class="side-title">
                  The source for proven, engaging email campaigns
                </div>
                <div class="side-sb">
                  Whether you???re a startup, small business, e-commerce store, or
                  want to promote your app, NinjaMail has the feature set
                  tailored for your business.
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        
        <div class="section-5">
          <div class="container">

          <div class="case-section">
            <div class="case-study">
              <Case image={frankie} name="Frankie" year="Member since 2016" />

              <Case image={camile} name="Camile" year="Member since 2012" />

              <Case image={elayne} name="Elayne" year="Member since 2018" />
            </div>
          </div>
          <div class="email-section">
            <div class="email-title">
              <div class="ct">
                Learn how others are reaching their audience easier than ever
                before.
              </div>
            </div>
            <div class="email">
              <div class="email-input">
                <div class="part">
                  <input type="text" placeholder="Enter your email"></input>
                  <div class="info">
                    <div class="congts">Thanks! Email received.</div>
                  </div>
                </div>
                <div class="join-button">
                  <div class="joinb">
                    <button class="join">JOIN OUR LIST</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div class="section-6">
          <div class="container">
          <div class="brands">
            <div class="brand-title">All the best brands already use us.</div>
            <div class="brand-logo">
              <div class="logos-con">
                
                <img class="knight" src={logo1} alt="#"></img>
                <img class="dragon" src={logo2} alt="#"></img>
               
               
                <img class="quest" src={logo3} alt="#"></img>
                <img class="radio" src={logo4} alt="#"></img>
                
                
                <img class="game" src={logo5} alt="#"></img>
               
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="section-7">
          <div class="plan">
            <div class="plan-title">Get started today!</div>
            <div class="plan-button">
              <div class="pickb">
                <button class="pick">PICK A PLAN</button>
              </div>
            </div>
          </div>
        </div>
        <div class="section-8">
          <div class="container">
          <div class="footer">
            <div class="foot-logo">
              <div class="foot-img">
                <img class="flogo" src={logo} alt="logo"></img>
              </div>
            </div>
            <div class="footer-menu">
              <div class="footer-links">
                <div class="mob-sec">
                <div class="sec">
                <a class="l" href="#">
                    Features
                  </a>
                  <a class="l" href="#">
                    Pricing
                  </a>
                  <a class="l" href="#">
                    Services
                  </a>
                  <a class="l" href="#">
                    Partners
                  </a>
                </div>

                <div class="sec">
                <a class="l" href="#">
                    About Us
                  </a>
                  <a class="l" href="#">
                    Tutorials
                  </a>
                  <a class="l" href="#">
                    Resources
                  </a>
                  <a class="l" href="#">
                    Help Center
                  </a>
                  <a class="l" href="#">
                    Templates
                  </a>
                  <a class="l" href="#">
                    Case Studies
                  </a>
                </div>
                </div>

                <div class="mob-sec">

                <div class="sec">
                <a class="l" href="#">
                    Medium
                  </a>
                  <a class="l" href="#">
                    Twitter
                  </a>
                  <a class="l" href="#">
                    Facebook
                  </a>
                  <a class="l" href="#">
                    Instagram
                  </a>
                  <a class="l" href="#">
                    LinkedIn
                  </a>
                </div>
                <div class="sec">
                <a class="l" href="#">
                    Contact Us
                  </a>
                  <a class="l" href="#">
                    Slack
                  </a>
                  <a class="l" href="#">
                    Jobs
                  </a>
                </div>
                </div>
                {/* <div class="sec">
                  <div class="mob-sec1">
                  <a class="l" href="#">
                    Features
                  </a>
                  <a class="l" href="#">
                    Pricing
                  </a>
                  <a class="l" href="#">
                    Services
                  </a>
                  <a class="l" href="#">
                    Partners
                  </a>
                </div>
                <div class="sec">
                  <a class="l" href="#">
                    About Us
                  </a>
                  <a class="l" href="#">
                    Tutorials
                  </a>
                  <a class="l" href="#">
                    Resources
                  </a>
                  <a class="l" href="#">
                    Help Center
                  </a>
                  <a class="l" href="#">
                    Templates
                  </a>
                  <a class="l" href="#">
                    Case Studies
                  </a>
                  </div>
                </div>
                <div class="sec">
                  <div class="mob-sec2">

                  <a class="l" href="#">
                    Medium
                  </a>
                  <a class="l" href="#">
                    Twitter
                  </a>
                  <a class="l" href="#">
                    Facebook
                  </a>
                  <a class="l" href="#">
                    Instagram
                  </a>
                  <a class="l" href="#">
                    LinkedIn
                  </a>
                </div>
                <div class="sec">
                  <a class="l" href="#">
                    Contact Us
                  </a>
                  <a class="l" href="#">
                    Slack
                  </a>
                  <a class="l" href="#">
                    Jobs
                  </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          </div>
        </div>

        <div class="section-9">
          <div class="container">
          <div class="copyright-sec">
            <div class="copyright">
              <div class="copy-text">
                NinjaMail is a sample project for Quest AI. ?? 2019 Quest AI, All
                rights reserved.
              </div>
            <div class="terms-pri">
              <div class="terms-sec">
                <div class="terms">Terms & Conditions</div>
              </div>
              <div class="privacy-sec">
                <div class="pri">Privacy Policy</div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
}

export default Responsive2
