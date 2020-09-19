import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const SecondPage = () => (
  <Layout>
    <Container>
      <Row>
        <Col lg={6}>
          <Form name="contact v1" mehtod="post" data-netlify="true" onSubmit="submit">
          <input type="hidden" name="form-name" value="contact v1"/>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Name"/>
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone Number(optional)</Form.Label>
            <Form.Control type="text" placeholder="Phone"/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Email"/>
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>How can I help you?</Form.Label>
            <Form.Control required as="textarea" rows="3" placeholder="Text..."/>
          </Form.Group>
          <Button type="submit">Submit</Button>
          </Form>
        </Col>
        <Col lg={6}>
        Carrousel
        </Col>
      </Row>
    </Container>

  </Layout>
)

export default SecondPage
