// Base

// Components
import BaseMenu from "../../components/base_menu"
import Social from "../../components/social"

class Base extends React.Component {
  render () {
    const contact = this.props.contact
    const { title, email, website, handle } = this.props.base
    return (
      <div className="panel extended yoda">
        <div className="panel-box">
          <div className="panel-row artboard-xs left">
            <div className="floater tall p-32">
              <div className="floater-box">
                <div className="floater-row">
                  <BaseMenu />
                </div>
                <hr className="separator-s" />
                <div className="floater-row">
                  <Social contact={contact}/>
                  <p className="font-xs">{handle}</p>
                </div>
                <hr className="separator-s" />
                <div className="floater-row">
                  <h3 className="font-l">{title}</h3>
                  <p className="font-s">{email}</p>
                  <p className="font-s">{website}</p>
                </div>
              </div>
              <div className="floater-box bottom">
                <div className="floater-row">
                  <a href="#" className="left center-h" rel="noreferrer">
                    <div className="icon-xxl m-0">
                      <img src={ require("../../../assets/images/up.png") } />
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

export default Base
