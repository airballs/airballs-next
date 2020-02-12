// Menu

// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Menu extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", event => {
      const burgerLeft = document.getElementById("burger-left")
      const burgerRight = document.getElementById("burger-right")
      const brand = document.getElementById("brand")
      const brandLogo = document.getElementById("brand-logo")
      if (document.body.scrollTop > 32 || document.documentElement.scrollTop > 32) {
        burgerLeft.style.cssText = "height: 60px; padding: 10px 0; -webkit-transition: all .3s; transition: all .3s;"
        burgerRight.style.cssText = "height: 60px; padding: 10px 0; -webkit-transition: all .3s; transition: all .3s;"
        brand.style.cssText = "height: 60px; -webkit-transition: all .3s; transition: all .3s;"
        brandLogo.style.cssText = "height: 44px; -webkit-transition: all .3s; transition: all .3s;"
      } else {
        burgerLeft.style.cssText = "height: 120px; -webkit-transition: all .3s; transition: all .3s;"
        burgerRight.style.cssText = "height: 120px; -webkit-transition: all .3s; transition: all .3s;"
        brand.style.cssText = "height: 120px; -webkit-transition: all .3s; transition: all .3s;"
        brandLogo.style.cssText = "height: 104px; -webkit-transition: all .3s; transition: all .3s;"
      }
    })
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
              <a href="/" className="left center-h" id="brand-logo">
                <img src={ require("../../assets/images/brand.png") } />
              </a>
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
