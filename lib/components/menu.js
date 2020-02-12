// Menu

// Core
import Link from "next/link"

// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Menu extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page - Index")
  }
  render () {
    return (
      <div>
        <div className="burger">
          <div className="burger-box">
            <div className="burger-item" id="burger-left">
              <a href="#" className="left">
                <img src={ require("../../assets/images/dots.png") } />
              </a>
            </div>
          </div>
        </div>
        <div className="brand">
          <div className="brand-box center-h">
            <div className="brand-item" id="brand">
              <Link href="/">
                <a className="left center-h" id="brand-logo">
                  <img src={ require("../../assets/images/brand.png") } />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="burger">
          <div className="burger-box">
            <div className="burger-item"  id="burger-right">
              <a href="#" className="right">
                <img src={ require("../../assets/images/dots.png") } />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
