// Burger

// Core
import Link from "next/link"

class Burger extends React.Component {
  render () {
    return (
      <div className="burger">
        <div className="burger-box">
          <div className="burger-item">
            <Link href="/">
              <a className="left">
                <img src={ require("../../assets/images/dots.png") } alt="Airballs" title="Airballs - Portuguse Fried Dough" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Burger
