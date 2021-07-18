import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
 query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
        simpleData
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`;

const FetchData = () => {
  const data = useStaticQuery(getData)
  return (
    <div>
      <h1>Site Name: {data.site.siteMetadata.title}</h1>
    </div>
  );
};

export default FetchData;
