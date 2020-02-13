// Social

class Social extends React.Component {
  render () {
    const { twitter, facebook, instagram } = this.props.contact
    return (
      <div className="social">
        <div className="social-box">
          <div className="social-item">
            <a href={twitter} className="link-xxl" target="_blank" rel="noreferrer">
              <div className="icon-xxl m-0">
                <img src={ require("../../assets/images/twitter.png") } alt="Airballs" title="Airballs - Portuguse Fried Dough"  />
              </div>
            </a>
          </div>
          <div className="social-item">
            <a href={facebook} className="link-xxl" target="_blank" rel="noreferrer">
              <div className="icon-xxl m-0">
                <img src={ require("../../assets/images/facebook.png") } alt="Airballs" title="Airballs - Portuguse Fried Dough"  />
              </div>
            </a>
          </div>
          <div className="social-item">
            <a href={instagram} className="link-xxl" target="_blank" rel="noreferrer">
              <div className="icon-xxl m-0">
                <img src={ require("../../assets/images/instagram.png") } alt="Airballs" title="Airballs - Portuguse Fried Dough"  />
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Social
