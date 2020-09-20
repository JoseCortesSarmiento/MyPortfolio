import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const HomeBanner = () => {
  const data = useStaticQuery(graphql`
    query HomeBannerQuery{
      image: allAirtable(
        filter: { table: { eq: "Images" } }
      ) {
        nodes {
          data {
            Image
          }
          recordId
        }
      }
    }
  `);

  return (
    <div>
      <img src={data.image.nodes[0].data.Image} style={{width: 100 + '%', height: 80 + '%'}} alt="imagen"></img>
    </div>
  );
}

export default HomeBanner