import React from 'react';
import { graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  const tagTitle = pageContext.tag.charAt(0).toUpperCase() + pageContext.tag.slice(1)
  return (
    <Layout>
      <SEO title={tagTitle} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default TagTemplate;
