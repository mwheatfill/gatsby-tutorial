import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';

const ContactPage = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              I'm baby copper mug glossier forage, readymade wayfarers cornhole
              vexillologist vinyl. Humblebrag tofu fanny pack raclette bitters.
              Enamel pin beard fixie tbh chia ugh hella pug, intelligentsia
              leggings subway tile offal fashion axe 90's.
            </p>
            <p>
              Ramps dreamcatcher twee, green juice church-key leggings tofu
              direct trade single-origin coffee.
            </p>
            <p>
              Kale chips tacos bitters squid shoreditch craft beer. Pug subway
              tile iceland readymade fam. Vegan iPhone thundercats cloud bread
              cold-pressed vexillologist four dollar toast photo booth truffaut.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
                <div className="form-row">
                  <label htmlFor="email">Your email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="form-row">
                  <label htmlFor="message">Your message</label>
                  <textarea name="message" id="message" />
                </div>
                <button>Submit</button>
              </div>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesomesauce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        prepTime
        cookTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default ContactPage;
