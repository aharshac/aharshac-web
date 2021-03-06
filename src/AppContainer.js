import React, { PropTypes } from "react"

import 'prismjs/themes/prism-okaidia.css'
// import 'style-loader!css-loader!prismjs/plugins/line-numbers/prism-line-numbers.css'
import "./index.global.css"
// import "./highlight.global.css"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

const AppContainer = (props) => (
  <Container>
    <DefaultHeadMeta />
    <Header />
    <Content>
      { props.children }
    </Content>
    <Footer />
  </Container>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
