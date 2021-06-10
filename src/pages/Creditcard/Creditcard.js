import arrowicon from "./assets/Back Icon.svg";
import moreicon from "./assets/More Icon.svg";
import visalogo from "./assets/Visa Logo (1).svg";
import shoes from "./assets/shoes.svg";
import Arrow from "./assets/Arrow.svg";
import "./App.scss";

function Creditcard() {
	return (
		<div id="creditcard">
			<div class="header">
				<div class="arrow-icon">
					<img src={arrowicon} alt="arrow-icon" />
				</div>
				<div class="header-text">Checkout</div>
				<div class="more-icon">
					<img src={moreicon} alt="more" />
				</div>
			</div>
			<div class="card-container">
				<div class="card">
					<div class="top-section">
						<div class="visa-logo">
							<img class="img-visa" src={visalogo} alt="visa" />
						</div>
						<div class="world">World</div>
					</div>
					<div class="middle-section">
						<div class="number-title">Card Number</div>
						<div class="number">
							<span>4539</span>
							<span>4659</span>
							<span>2157</span>
							<span>2356</span>
						</div>
					</div>
					<div class="bottom-section">
						<div class="expire-box">
							<div class="expire">Expiration</div>
							<div class="exp-date">01/2024</div>
						</div>
						<div class="CVC-box">
							<div class="CVC-title">CVC2</div>
							<div class="CVC-code">234</div>
						</div>
					</div>
				</div>
			</div>
			<div class="second-header">
				<div class="purchaise-header">Purchaise</div>
				<div class="more-icon2">
					<img src={moreicon} alt="more" />
				</div>
			</div>
			<div class="product-container">
				<div class="product-image">
					<img class="shoe-img" src={shoes} alt="shoes" />
				</div>
				<div class="discription-container">
					<div>
						<div class="product-discription">Mens Shoe</div>
						<div class="product-name">Nike Shoe</div>
						<div class="product-price">$ 320.99</div>
					</div>
					<div class="button-container">
						<div class="next-button">
							<div class="next-arrow">
								<img src={Arrow} alt="arrow" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Creditcard;
