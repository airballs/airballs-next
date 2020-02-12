// Story

class Story extends React.Component {
  goToAirballs(event) {
    event.preventDefault()
    document.querySelector(".airballs").scrollIntoView({
      behavior: "smooth"
    });
  }

  render () {
    const { title, description } = this.props.story
    return (
      <div className="panel extended base-brown-light-bg story">
        <div className="panel-box">
          <div className="panel-row artboard-xs center-h">
            <div className="floater tall">
              <div className="floater-box">
                <div className="floater-row">
                  <h2 className="font-xxl text-center">{title}</h2>
                  <hr className="separator-m" />
                  <p className="font-l text-center">{description}</p>
                </div>
              </div>
              <div className="floater-box bottom">
                <div className="floater-row">
                  <a href="#" onClick={this.goToAirballs} className="left center-h" rel="noreferrer">
                    <div className="icon-xxl m-0">
                      <img src={ require("../../../assets/images/down.png") } alt="Airballs" Title="Airballs - Portuguse Fried Dough"  />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Story
