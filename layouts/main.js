// Main Layout

// Core
import React from "react"
import Head from "next/head"
// Components
import Notifications from "../lib/globals/notifications"
import Header from "../lib/globals/header"
import Footer from "../lib/globals/footer"
import Advisory from "../lib/globals/advisory"
// import Burger from "../lib/components/burger"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Design extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered - Main Layout")
  }

  render () {
    const { children } = this.props
    const meta = children.props.meta
    const config = children.props.config
    return (
      <div className="root">
        {/* Head */}
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Head>
        <Notifications />
        {/* <Burger /> */}
        <Header />
        {/* Sticky */}
        <div className="sticky-footer">
          {/* Main */}
          <main className="universal main">
            { children }
          </main>
        </div>
        <Footer config={config}/>
        <Advisory />
      </div>
    )
  }
}

export default Design
