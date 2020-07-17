import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Byline from "../images/byline.svg"
import TitleSVG from "../images/felixity_the_cat.svg"

import { Deck, Heading, Nametag, FootingImage } from "../components/layouts"

export default function Home({ data }) {
  return (
    <>
      <Helmet>
        <title>Felixity's site</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Michael C. Burkhart" />
        <meta name="description" content="Felxity the Cat's home page" />
        <meta
          name="keywords"
          content="Felixity,the cat,tuxedo cats,instagram"
        />
      </Helmet>

      <Deck>
        <Heading>
          <picture>
            <img src={TitleSVG} alt="me" />
          </picture>
        </Heading>

        <Nametag>
          <a
            href="https://www.instagram.com/felixity_the_cat/"
            target="_blank"
            rel="noopener"
          >
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="link to Felixity the cat"
            />
          </a>
        </Nametag>

        <div>
          <a href="https://burkh4rt.github.io/" target="_blank" rel="noopener">
            <FootingImage src={Byline} alt="Michael C. Burkhart, author" />
          </a>
        </div>
      </Deck>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "combined_content.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`