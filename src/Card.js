
import comment from "./assets/comment.svg"
import view from "./assets/view.svg"
import share from "./assets/share.svg"

function Card(props) {
    console.log(props)
    return (
<div class="VR">
            <img class="VR-image" src={props.image} alt="VR"/>
            <div class="VR-content">
              <div class="title">
               {props.title}
              </div>
              <div class="sub-title">
                  {props.subtitle}
              </div>
              <div class="discription">
                  {props.discription}
              </div>
            </div>
            <div class="action-container">
              <div class="comment-container">
                <img class="icon" src={comment} alt="comment"/>
                <div class="count">349</div>
              </div>
              <div class="view-container">
                <img class="icon" src={view} alt="view"/>
                <div class="count">49500</div>
              </div>
              <div class="share-container">
                <img class="icon" src={share} alt="share"/>
              </div>
            </div>
            </div>
    )
}

export default Card;