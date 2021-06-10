import bg from './assets/Bitmap.svg';
import signal from './assets/Signal.svg';
import wifi from './assets/Wifi.svg';
import bluetooth from './assets/Bluetooth Icon.svg';
import battery from './assets/Battery Icon.svg';
import diamond from './assets/diamond.svg';
import slider from './assets/Slider.svg';
import './BadgeScreen.scss';

function BadgeScreen() {
  return (
    <div id="badge-screen">
      <div class="background">
        <img class="background-image" src={bg} alt="bg"/>
        <div class="status-con">
        <div class="status-bar">
          <div class="section-1">
            <img class="signal" src={signal} alt="signal"/>
            <img class="wifi" src={wifi} alt="wifi"/>
          </div>
          <div class="section-2">
            <div class="time">9:41 AM</div>
          </div>
          <div class="section-3">
            <img class="bluetooth" src={bluetooth} alt="bluetooth"/>
            <div class="battery">58%</div>
            <img class="battery-icon" src={battery} alt="battery"/>
          </div>
        </div>
        </div>
        <div class="button-skip">
        <button class="skip">Skip</button>
        </div>
        <div class="diamond">
          <img class="diamond-img" src={diamond} alt="diamond"/>
        </div>
        <div class="content-container">
          <div class="title">
          Friend of Nature
          </div>
          <div class="content">
          You earn the badge of a true Friend of Nature. Every plant feels good with you. Keep it up!
          </div>
          <div class="button-next">
        <button class="next">Next</button>
        </div>
        <div class="slider-container">
          <div class="slider">
            <img class="slider-img" src={slider} alt="slider"/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeScreen;
