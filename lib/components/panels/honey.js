// Honey

class Honey extends React.Component {
  goToMilk(event) {
    event.preventDefault()
    document.querySelector(".milk").scrollIntoView({
      behavior: "smooth"
    });
  }

  render () {
    const { title } = this.props.honey
    return (
      <div className="panel extended base-brown-light-bg honey">
        <div className="panel-box">
          <div className="panel-row artboard-xs center-h">
            <div className="floater tall">
              <div className="floater-box">
                <div className="floater-row">
                  <h3 className="font-xxl text-center">{title}</h3>
                </div>
              </div>
              <div className="floater-box bottom">
                <div className="floater-row">
                  <a href="#" onClick={this.goToMilk} className="left center-h" rel="noreferrer">
                    <div className="icon-xxl m-0">
                      <img src={ require("../../../assets/images/down.png") } alt="Airballs" title="Airballs - Portuguse Fried Dough"  />
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

export default Honey
