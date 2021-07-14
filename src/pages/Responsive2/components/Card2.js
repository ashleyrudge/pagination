
import next from "../assets/next.svg"


function Card(props) {
  console.log(props)
    return(
        <div class="card">
          <div class="ava-con">
        <img class="ava" src={props.image} alt="Avatar"></img>
          </div>
        <div class="container">
          <div class="content">
            {props.content}
              <div class="learn">
              <button class="lrn-button">
              Learn More
              <img class="next" src={next} alt="next"></img>
              </button>
          </div>
              </div>
        </div>
      </div>
    )
}

export default Card