// Base Menu

// Core
import Link from "next/link"

class BaseMenu extends React.Component {
  goToIntro(event) {
    event.preventDefault()
    document.querySelector(".intro").scrollIntoView({
      behavior: "smooth"
    });
  }

  goToStory(event) {
    event.preventDefault()
    document.querySelector(".story").scrollIntoView({
      behavior: "smooth"
    });
  }

  goToAirballs(event) {
    event.preventDefault()
    document.querySelector(".airballs").scrollIntoView({
      behavior: "smooth"
    });
  }

  goToFlavours(event) {
    event.preventDefault()
    document.querySelector(".flavours").scrollIntoView({
      behavior: "smooth"
    });
  }

  goToContact(event) {
    event.preventDefault()
    document.querySelector(".contact").scrollIntoView({
      behavior: "smooth"
    });
  }

  render () {
    return (
      <div>
        <nav className="base-menu">
          <div className="base-menu-box">
            <div className="base-menu-item" id="base-menu-left">
              <Link href="#"><a onClick={this.goToIntro} className="link-l white">Home</a></Link>
            </div>
            <div className="base-menu-item" id="base-menu-left">
              <Link href="#"><a onClick={this.goToStory} className="link-l white">Our Story</a></Link>
            </div>
            <div className="base-menu-item" id="base-menu-left">
              <Link href="#"><a onClick={this.goToAirballs} className="link-l white">Airballs</a></Link>
            </div>
            <div className="base-menu-item" id="base-menu-left">
              <Link href="#"><a onClick={this.goToFlavours} className="link-l white">Flavours</a></Link>
            </div>
            <div className="base-menu-item" id="base-menu-left">
              <Link href="#"><a onClick={this.goToContact} className="link-l white">Contact</a></Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default BaseMenu
