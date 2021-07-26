
function USP(props){
    return(
        <div class="USP">
          <div class="USP1">
            <div class="USP-img">
              <img src={props.image} alt="usp1" />
            </div>
            <div class="title-con">
            <div class="title">{props.title}</div>
            </div>
            <div class="usp-content">
              {props.content}
            </div>
          </div>
        </div>
    )
}

export default USP