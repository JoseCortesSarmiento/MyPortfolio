import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import CarouselContact from "../components/CarouselContact"
//import SEO from "../components/seo"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SecondPage = () => (
  <Layout>
    <Container style={{display: "flex", height: 100 + '%', justifyContent:"center", alignItems: "center"}}>
      <Row style={{width: 100 + 'vw'}}>
        <Col lg={6}>
          <h3 className="mt-3">Contact</h3>
          <Form name="contact v2" method="post" data-netlify="true" onSubmit="submit">
          <input type="hidden" name="form-name" value="contact v2"/>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Name" name="name"/>
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone Number(optional)</Form.Label>
            <Form.Control type="text" placeholder="Phone" name="phone"/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Email" name="email"/>
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>How can I help you?</Form.Label>
            <Form.Control required as="textarea" rows="3" placeholder="Text..." name="text"/>
          </Form.Group>
          <Button type="submit">Submit</Button>
          </Form>
        </Col>
        <Col lg={6}>
          <h3 className="mt-3">My Work</h3>
          <CarouselContact/>
        </Col>
      </Row>
    </Container>

  </Layout>
)

export default SecondPage
