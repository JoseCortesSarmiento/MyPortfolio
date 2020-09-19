import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"
import Menu from "../components/Menu"
import HomeBanner from "../components/HomeBanner"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Card from 'react-bootstrap/Card'

const IndexPage = () => (
  <Layout>
    <Container fluid>
      <Row className = "bg-dark">
        <Col style={{height: 80 + '%', paddingLeft: 0, paddingRight: 0}}><HomeBanner/></Col>
      </Row>
    </Container>
    <div style={{position: 'absolute', marginTop: -6.5 + 'vh', marginLeft: 2 + 'vw'}}>
      {<a href="https://www.twitter.com"><img style={{width: 2.5 + 'vw'}} src="/images/icons/twitter.svg" alt="Twitter" /></a>}
      <span style={{marginLeft: 2.5 + 'vw'}}></span>
      {<a href="https://www.facebook.com"><img style={{width: 2 + 'vw'}} src="/images/icons/facebook.svg" alt="Facebook" /></a>}
    </div>
    <Container>
      <h3 className="mt-3">Evidence</h3>
      <Menu/>
    </Container>
  </Layout>
)

export default IndexPage
