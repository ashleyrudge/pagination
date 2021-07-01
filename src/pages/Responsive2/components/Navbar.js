import logo from "../assets/ninjalogo.svg"


function Navbar(){
    return(
        <div class="navbar">
           <div class="logo">
               <div class="logo-img">
                   <img src={logo} alt="logo"></img>
               </div>
           </div>
           <div class="menu-sec">

           <div class="menu">
                 <a class="a" href="#">FEARURES</a>
                 <a class="a" href="">PRICING</a>
                 <a class="a" href="#">SERVICES</a>
                 <a class="a" href="#">PARTNERS</a>
           </div>
           <div class="signup">
               <button class="sign">
                   SIGN UP FREE
               </button>
           </div>
           </div>
       </div>
    )
}


export default Navbar