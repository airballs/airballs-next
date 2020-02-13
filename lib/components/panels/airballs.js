// Airballs

class Airballs extends React.Component {
  goToFlavours(event) {
    event.preventDefault()
    document.querySelector(".flavours").scrollIntoView({
      behavior: "smooth"
    });
  }

  render () {
    const { title, description } = this.props.airballs
    return (
      <div className="panel extended airballs">
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
                  <a href="#" onClick={this.goToFlavours} className="left center-h" rel="noreferrer">
                    <div className="icon-xxl m-0">
                      <img src={ require("../../../assets/images/down.png") } alt="Airballs" title="Airballs - Portuguse Fried Dough" />
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

export default Airballs
