// Header

// Components
import Menu from "../components/menu"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Header extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page - Index")
  }

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
