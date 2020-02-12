// Header

// Components
import Menu from "../components/menu"

class Header extends React.Component {
  render () {
    const config = this.props.config
    return (
      <header className="universal header" id="header">
        <div className="universal-box">
          <div className="universal-row artboard-xs center-h">
            <Menu />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
