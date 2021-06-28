import herobg from "./assets/shapes.svg"
import heroimg from "./assets/firstimg.svg"
import './app.scss'
import Header from "./components/Header";
import Card from "./components/Card2";
import Case from "./components/Case";
import morebg from "./assets/2nd-bg.svg"
import video from "./assets/video.svg"
import card2 from "./assets/card2.svg"
import card1 from "./assets/card1.svg"
import frankie from "./assets/frankie.svg"
import camile from "./assets/camile.svg"
import elayne from "./assets/elayne.svg"
import logo1 from "./assets/lastnight.svg"
import logo2 from "./assets/dragon.svg"
import logo3 from "./assets/quest.svg"
import logo4 from "./assets/radio.svg"
import logo5 from "./assets/game.svg"
import logo from "./assets/ninjalogo.svg"

function ResponsiveMock() {
    return (
   <div class="responsive">
       <Header/>
       <div class="hero">
           <div class="hero-title">
               <div class="main-title">
               Create Stunning Email Campaigns
               </div>
               <div class="sub-title">
               Create and launch email campaigns that captivate your customers in just a few clicks.
               </div>
               <div class="hero-buttons">
                   <div class="try-button">
                   <button class="try">TRY NOW</button>
                   </div>
                   <div class="demo-buttons">
                       <button class="demo">
                           GET A DEMO
                       </button>
                   </div>
               </div>
           </div>
           <div class="hero-bg">
               <img class="bg "src={herobg} alt="bg"></img>
        <div class="hero-img">
            <div class="hero-imgchild">
               <img src={heroimg} alt="heroimg"></img>
           </div>
        </div>
           </div>
          
       </div>
       <div class="more">
           <div class="more-child">
           <div class="img2">
               <img class="mbg" src={morebg} alt="bg"></img>
        </div>
        <div class="more-img">
        <div class="title">
               Reach More Customers
               </div>
               <div class="more-button">
                   <button class="view-button">
                       LEARN HOW
                   </button>
               </div>
            <img src={video} alt="video"></img>
           </div>
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
        </div>
       </div>
       <div class="case-section">
            <div class="case-study">
                <Case
                image={frankie}
                name="Frankie"
                year="Member since 2016"
                />

                <Case      
                image={camile}
                name="Camile"
                year="Member since 2012"
                />

                <Case      
                image={elayne}
                name="Elayne"
                year="Member since 2018"
                />

            </div>
        </div>
        <div class="email-section">
            <div class="email-title">
                <div class="ct">
                Learn how others are reaching their audience easier than ever before.
                </div>
            </div>
            <div class="email">
                <div class="email-input">
					<input type="text" placeholder="Enter your email"></input>
                    <div class="join-button">
                <div class="joinb">
                   <button class="join">JOIN OUR LIST</button>
                   </div>
                </div>
                </div>
                <div class="info">
                       <div class="congts">
                       Thanks! Email received.
                       </div>
                   </div>
            </div>
            </div>
            <div class="brands">
                <div class="brand-title">
                All the best brands already use us.
                </div>
                <div class="brand-logo">
                    <div class="logo">
                        <img class="knight" src={logo1} alt="#"></img>
                    </div>
                    <div class="logo">
                        <img class="dragon" src={logo2} alt="#"></img>
                    </div>
                    <div class="logo">
                        <img class="quest" src={logo3} alt="#"></img>
                    </div>
                    <div class="logo">
                        <img class="radio" src={logo4} alt="#"></img>
                    </div>
                    <div class="logo">
                        <img class="gagme" src={logo5} alt="#"></img>
                    </div>
                </div>
            </div>
            <div class="plan">
                <div class="plan-title">
                Get started today!
                </div>
                <div class="plan-button">
                <div class="pickb">
                   <button class="pick">PICK A PLAN</button>
                </div>
                </div>
            </div>
            <div class="fdiv">
            <div class="footer">
            <div class="foot-logo">
               <div class="foot-img">
                   <img src={logo} alt="logo"></img>
               </div>
               <div class="foot-name">NinjaMail</div>
           </div>
           <div class="footer-menu">
               <div class="footer-links">
                   <div class="sec">
               <a class="l" href="#">Features</a>
               <a class="l" href="#">Pricing</a>
               <a class="l" href="#">Services</a>
               <a class="l" href="#">Partners</a>
                   </div>
                   <div class="sec">
               <a class="l" href="#">About Us</a>
               <a class="l" href="#">Tutorials</a>
               <a class="l" href="#">Resources</a>
               <a class="l" href="#">Help Center</a>
               <a class="l" href="#">Templates</a>
               <a class="l" href="#">Case Studies</a>
                   </div>
                   <div class="sec">
               <a class="l" href="#">Medium</a>
               <a class="l" href="#">Twitter</a>
               <a class="l" href="#">Facebook</a>
               <a class="l" href="#">Instagram</a>
               <a class="l" href="#">LinkedIn</a>
                   </div>
                   <div class="sec">
               <a class="l" href="#">Contact Us</a>
               <a class="l" href="#">Slack</a>
               <a class="l" href="#">Jobs</a>
                   </div>
               </div>
           </div>
           </div>
           <div class="copyright-sec">
               <div class="copyright">
               <div class="copy-text">
               NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.
               </div>
               </div>
               <div class="terms-sec">
                   <div class="terms">
                   Terms & Conditions
                   </div>
               </div>
               <div class="privacy-sec">
                   <div class="pri">
                   Privacy Policy
                   </div>
               </div>
            </div>
   </div>
   </div>
    );
}

export default ResponsiveMock