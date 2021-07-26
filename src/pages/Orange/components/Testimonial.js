


function Testimonial(props){
    return( 
        <div class="blue-testimonial" style={props.cardType==="2"?{backgroundColor:"white"}:{backgroundColor:"#9bdbe7"}}>
        <div class="blue-content">
        <div class="white-quote">
          <img src={props.image} alt="#" />
        </div>

        <div class="review-div" style={props.cardType==="2"?{width:"80%"}:{width:"55%"}}>
          <div class="review" style={props.cardType==="2"?{color:"#7C7C7C"}:{color:"white"}}>
          {props.review}
          </div>
          </div>
        <div class="costumer-div">
          <div class="costumer" style={props.cardType==="2"?{color:"#7C7C7C"}:{color:"white"}}>
         {props.costumer}
          </div>
          </div>
        </div>
        </div>
    )
}

export default Testimonial