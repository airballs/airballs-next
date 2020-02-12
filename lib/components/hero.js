// Hero

class Hero extends React.Component {
  render () {
    const { name, title, description, subtitle } = this.props.project
    return (
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <h1 className="font-xxl text-center">{title}</h1>
          </div>
          <div className="hero-row">
            <p className="font-m text-center">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
