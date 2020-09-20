import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const CarouselContact = () => {
  const data = useStaticQuery(graphql`
    query CarouselContactQuery {
        imagesCarousel: allAirtable(
        filter: { table: { eq: "CarouselCont" } }
        ) {
        nodes {
            data {
            Name
            Image
            }
            recordId
        }
        }
    }
  `);

  return (
    <img src={data.imagesCarousel.nodes[0].data.Image} style={{width: 100 + '%'}} alt="imagen"></img>
  );
};

export default CarouselContact;