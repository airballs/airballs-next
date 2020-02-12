// Base Menu

import Link from "next/link"

class BaseMenu extends React.Component {
  render () {
    return (
      <div>
        <nav className="base-menu">
          <div className="base-menu-box">
            <div className="base-menu-item" id="base-menu-left">
              <Link href="#"><a className="link-xl white">Home</a></Link>
            </div>
            <div className="base-menu-item" id="base-menu-left">
              <Link href="#"><a className="link-xl white">Our Story</a></Link>
            </div>
            <div className="base-menu-item" id="base-menu-left">
              <Link href="#"><a className="link-xl white">Airballs</a></Link>
            </div>
            <div className="base-menu-item" id="base-menu-left">
              <Link href="#"><a className="link-xl white">Flavours</a></Link>
            </div>
            <div className="base-menu-item" id="base-menu-left">
              <Link href="#"><a className="link-xl white">Contact</a></Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default BaseMenu
