// Intro

class Intro extends React.Component {
  render () {
    const { title, description } = this.props.project
    return (
      <div className="panel intro">
        <div className="panel-box">
          <div className="panel-row artboard-xs center-h">
            <div className="floater tall">
              <div className="floater-box middle">
                <div className="floater-row">
                  <h1 className="font-xxl text-center">{title}</h1>
                  <hr className="separator-s" />
                  <p className="font-l text-center">{description}</p>
                </div>
              </div>
              <div className="floater-box bottom">
                <div className="floater-row">
                  <a href="#" className="left center-h" rel="noreferrer">
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

export default Intro
