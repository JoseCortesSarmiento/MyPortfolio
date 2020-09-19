import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      sandwiches: allAirtable(
        filter: { table: { eq: "Sandwiches" } }
      ) {
        nodes {
          data {
            Name
            Image
            Description
            Url
          }
          recordId
        }
      }
    }
  `);

  return (
    <div style={{display: 'flex'}}>
        {data.sandwiches.nodes.map((item, i) => (
          <Row>
            <Col lg={10}>
              <Card className="mb-3">
                {<a href={item.data.Url}><Image src={item.data.Image} className="card-img-top" alt="Card-Image" fluid /></a>}                
                <Card.Body>
                  <Card.Title>{item.data.Name}</Card.Title>
                  <Card.Text><p>{item.data.Description}</p></Card.Text>
                </Card.Body>
              </Card>
            </Col> 
          </Row>     
        ))}
      
    </div>
  );
};

export default Menu;