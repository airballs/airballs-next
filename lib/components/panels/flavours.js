// Flavours

class Flavours extends React.Component {
  goToWhite(event) {
    event.preventDefault()
    document.querySelector(".white").scrollIntoView({
      behavior: "smooth"
    });
  }

  render () {
    const { title, description } = this.props.flavours
    return (
      <div className="panel extended base-brown-light-bg flavours">
        <div className="panel-box">
          <div className="panel-row artboard-xs center-h">
            <div className="floater tall">
              <div className="floater-box">
                <div className="floater-row">
                  <h3 className="font-xxl text-center">{title}</h3>
                  <hr className="separator-m" />
                  <p className="font-l text-center">{description}</p>
                </div>
              </div>
              <div className="floater-box bottom">
                <div className="floater-row">
                  <a href="#" onClick={this.goToWhite} className="left center-h" rel="noreferrer">
                    <div className="icon-xxl m-0">
                      <img src={ require("../../../assets/images/down.png") } />
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

export default Flavours
