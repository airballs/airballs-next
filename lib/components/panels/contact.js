// Contact

// Components
import Social from "../../components/social"

class Contact extends React.Component {
  render () {
    const contact = this.props.contact
    const { title, email, website, handle } = this.props.contact
    return (
      <div className="panel extended contact">
        <div className="panel-box">
          <div className="panel-row artboard-xs center-h">
            <div className="floater tall">
              <div className="floater-box">
                <div className="floater-row">
                  <h3 className="font-xxl text-center">{title}</h3>
                  <hr className="separator-l" />
                  <p className="text-center">{email}</p>
                  <p className="text-center">{website}</p>
                  <hr className="separator-l" />
                  <div className="center-h">
                    <Social contact={contact} />
                  </div>
                  <p className="text-center">{handle}</p>
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

export default Contact
