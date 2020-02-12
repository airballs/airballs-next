// Index

// Components
import Intro from "../lib/components/panels/intro"
import Story from "../lib/components/panels/story"
import Airballs from "../lib/components/panels/airballs"
import Flavours from "../lib/components/panels/flavours"
import White from "../lib/components/panels/white"
import Honey from "../lib/components/panels/honey"
import Milk from "../lib/components/panels/milk"
import Contact from "../lib/components/panels/contact"
import Base from "../lib/components/panels/base"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", event => {
      const burgerLeft = document.getElementById("burger-left")
      const burgerRight = document.getElementById("burger-right")
      const brand = document.getElementById("brand")
      const brandLogo = document.getElementById("brand-logo")
      if (document.body.scrollTop > 119 || document.documentElement.scrollTop > 119) {
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
    const project = this.props.project
    const story = this.props.story
    const airballs = this.props.airballs
    const flavours = this.props.flavours
    const honey = this.props.honey
    const milk = this.props.milk
    const white = this.props.white
    const contact = this.props.contact
    const base = this.props.base
    return (
      <div>
        <Intro project={project} />
        <Story story={story} />
        <Airballs airballs={airballs} />
        <Flavours flavours={flavours} />
        <White white={white} />
        <Honey honey={honey} />
        <Milk milk={milk} />
        <Contact contact={contact} />
        <Base base={base} contact={contact} />
      </div>
    )
  }
}

export default Index
