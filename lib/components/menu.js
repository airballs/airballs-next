// Menu

// Core
import Link from "next/link"

class Menu extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", event => {
      // const burgerLeft = document.getElementById("burger-left")
      // const burgerRight = document.getElementById("burger-right")
      const brand = document.getElementById("brand")
      const brandItem = document.getElementById("brand-item")
      const brandLogo = document.getElementById("brand-logo")
      if (document.body.scrollTop > 119 || document.documentElement.scrollTop > 119) {
        // burgerLeft.style.cssText = "height: 60px; padding: 10px 0; -webkit-transition: all .3s; transition: all .3s;"
        // burgerRight.style.cssText = "height: 60px; padding: 10px 0; -webkit-transition: all .3s; transition: all .3s;"
        brand.style.cssText = "height: 60px; width: 60px; -webkit-transition: all .3s; transition: all .3s;"
        brandItem.style.cssText = "height: 60px; width: 60px; padding: 8px; -webkit-transition: all .3s; transition: all .3s;"
        brandLogo.style.cssText = "height: 44px; -webkit-transition: all .3s; transition: all .3s;"
      } else {
        // burgerLeft.style.cssText = "height: 120px; -webkit-transition: all .3s; transition: all .3s;"
        // burgerRight.style.cssText = "height: 120px; -webkit-transition: all .3s; transition: all .3s;"
        brand.style.cssText = "height: 120px; width: 120px; -webkit-transition: all .3s; transition: all .3s;"
        brandItem.style.cssText = "height: 120px; width: 120px; padding: 16px; -webkit-transition: all .3s; transition: all .3s;"
        brandLogo.style.cssText = "height: 88px; -webkit-transition: all .3s; transition: all .3s;"
      }
    })
  }

  render () {
    return (
      <div className="left wide">
        {/*
          <div className="burger">
            <div className="burger-box">
              <div className="burger-item" id="burger-left">
                <a href="#" className="left">
                  <img src={ require("../../assets/images/dots.png") } alt="Airballs" title="Airballs - Portuguse Fried Dough"  />
                </a>
              </div>
            </div>
          </div>
        */}
        <div className="brand center-h" id="brand">
          <div className="brand-box">
            <div className="brand-item" id="brand-item">
              <Link href="/">
                <a className="left">
                  <img src={ require("../../assets/images/brand.png") } alt="Airballs" title="Airballs - Portuguse Fried Dough"  id="brand-logo"/>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/*
          <div className="burger">
            <div className="burger-box">
              <div className="burger-item"  id="burger-right">
                <a href="#" className="right">
                  <img src={ require("../../assets/images/dots.png") } alt="Airballs" title="Airballs - Portuguse Fried Dough"  />
                </a>
              </div>
            </div>
          </div>
        */}
      </div>
    )
  }
}

export default Menu
