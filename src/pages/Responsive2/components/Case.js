function Case (props){
    return(
        <div class="frankie-case">
            <div class="img-con">
                   <img class="frankie" src={props.image} alt="#"></img>
            </div>
                   <div class="frankie-con">
                       <div class="name">
                       {props.name}
                       </div>
                       <div class="year">
                      {props.year}
                       </div>
                   </div>
                </div>
    )
}

export default Case