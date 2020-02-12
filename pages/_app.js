// _app

// Core
import React from "react"
import App from "next/app"
// Layouts
import MainLayout from "../layouts/main"
import LegalLayout from "../layouts/legal"
// SCSS
import "../assets/stylesheets/tadao.scss"
// Data
import meta from "js-yaml-loader!../data/meta.yml"
import config from "js-yaml-loader!../data/config.yml"
import project from "js-yaml-loader!../data/project.yml"
import story from "js-yaml-loader!../data/panels/story.yml"
import airballs from "js-yaml-loader!../data/panels/airballs.yml"
import flavours from "js-yaml-loader!../data/panels/flavours.yml"
import honey from "js-yaml-loader!../data/panels/honey.yml"
import milk from "js-yaml-loader!../data/panels/milk.yml"
import white from "js-yaml-loader!../data/panels/white.yml"
import contact from "js-yaml-loader!../data/panels/contact.yml"
import base from "js-yaml-loader!../data/panels/base.yml"

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps,
      meta: meta,
      config: config,
      project: project,
      story: story,
      airballs: airballs,
      flavours: flavours,
      honey: honey,
      milk: milk,
      white: white,
      contact: contact,
      base: base
    }
  }

  render() {
    const { Component, pageProps, router, config, project } = this.props
    if (router.pathname.startsWith("/legal")) {
      return (
        <LegalLayout>
          <Component {...pageProps} {...meta} {...config} {...project} />
        </LegalLayout>
      )
    } else {
      return (
        <MainLayout>
          <Component {...pageProps} {...meta} {...config} {...project} {...story} {...airballs} {...flavours} {...honey} {...milk} {...white} {...contact} {...base} />
        </MainLayout>
      )
    }
  }
}

export default MyApp
