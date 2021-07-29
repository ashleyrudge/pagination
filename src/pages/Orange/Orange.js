import "./orange.scss";
import Navbar from "../Orange/components/Navbar";
import phone from "./assets/top-img.svg";
import USP1 from "./assets/USP1.svg";
import USP2 from "./assets/USP2.svg";
import USP3 from "./assets/USP3.svg";
import tree from "./assets/tree.svg";
import quote from "./assets/Quotes.svg";
import whiteqoute from "./assets/LittleQuotesW.svg";
import orangeqoute from "./assets/LittleQuotesO.svg";
import mobilem from "./assets/mobile-middle.svg";
import costumerbg from "./assets/CustomersBackground.svg";
import USP from "./components/USP";
import Testimonial from "./components/Testimonial";
import Email from "./components/Email";

function Orange() {
  return (
    <div class="orange">
      <div class="section-1">
        <div class="container">
          <Navbar />
          <div class="section-2">
            <div class="top-content">
              <div class="content-div">
                <div class="main">
                  Subscribe today and get notified first when we launch Orange
                  app!
                </div>
                <div class="sub">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </div>
                <div class="subscribe">
                 <Email/>
                </div>
              </div>
            </div>
            <div class="img-con">
              <div class="img-div">
                <img src={phone} alt="phone" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-3">
        <div class="container">
          <USP
            image={USP1}
            title="Title 1"
            content="Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. "
          />

          <USP
            image={USP2}
            title="Title 2"
            content="Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. "
          />

          <USP
            image={USP3}
            title="Title 3"
            content="Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. "
          />
        </div>
      </div>
      <div class="section-4">
        <div class="container">
          <div class="middle-content">
            <div class="left-column">
              <img src={tree} alt="tree" />
            </div>
            <div class="left-column-mobile">
              <img src={mobilem} alt="#"/>
            </div>
            <div class="right-column">
              <div class="mid-title">It tastes like Premium.</div>
              <div class="mid-subtitle">Better than an apple.</div>
              <div class="mid-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div class="subscribe-button">
                <div class="subscribeb">
                  <button class="subb">Subscribe now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-5">
        <div class="container">
          <div class="testimonial-section">
            <div class="testimonial-quote">
              <div class="test-quote">What Our Customers Say</div>
              <div class="q-img">
                <img src={quote} alt="quote" />
              </div>
            </div>
          <div class="review-cards">
            <Testimonial
            image={whiteqoute}
            review="“I love oranges!!
            tasty mmmmm…..”"
            costumer="Marjon Siero / Ironhack"
            cardType="1"
            />
            <Testimonial
            image={orangeqoute}
            review="“If life gives you lemons, f*ck it, I just want more oranges”"
            costumer="Dina Korkmazova / Ironhack"
            cardType="2"
            />
          </div>
          </div>
        </div>
      </div>
      <div class="section-6">
          <div class="container">
        <div class="bottom-section">
            <div class="bottom-con">
              <div class="btitle">
              Subscribe today and get notified first!
              </div>
              <div class="countdown">
              Product launch in: 12 days
              </div>
              <div class="bottom-subscribe">
                <Email/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-7">
        <div class="footer">
          <div class="copyright">
          © 2019 Orange All Right Reserved
          </div>
          <div class="footer-menu">
          <div class="menu-sec">
           <div class="menu">
                 <a class="a" href="#">Benefit</a>
                 <span>/</span>
                 <a class="a" href="#">Pricing</a>
                 <span>/</span>
                 <a class="a" href="#">Testimonials</a>
           </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orange;
