// Social

class Social extends React.Component {
  render () {
    const { twitter, facebook, instagram } = this.props.contact
    return (
      <div className="social">
        <div className="social-box">
          <div className="social-item">
            <a href={twitter} className="link-xxl" target="_blank">
              <div className="icon-xxl m-0">
                <img src={ require("../../assets/images/down.png") } />
              </div>
            </a>
          </div>
          <div className="social-item">
            <a href={facebook} className="link-xxl" target="_blank">
              <div className="icon-xxl m-0">
                <img src={ require("../../assets/images/down.png") } />
              </div>
            </a>
          </div>
          <div className="social-item">
            <a href={instagram} className="link-xxl" target="_blank">
              <div className="icon-xxl m-0">
                <img src={ require("../../assets/images/down.png") } />
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Social
