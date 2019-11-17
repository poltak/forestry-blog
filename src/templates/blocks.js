import React from 'react'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

// import blocks
import ThreeCol from '../components/blocks/3col'
import Feature from '../components/blocks/feature'
import CTA from '../components/blocks/cta'
import Hero from '../components/blocks/hero'
import SEO from '../components/seo'

class BlocksTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteDescription = post.excerpt

    return (
      <Layout location={this.props.location}>
        <SEO description={siteDescription} title={post.frontmatter.title} />
        {post.frontmatter.blocks.map(block => {
          switch (block.component) {
            case '3col':
              return <ThreeCol block={block} />
            case 'feature':
              return <Feature block={block} />
            case 'cta':
              return <CTA block={block} />
            case 'hero':
              return <Hero block={block} />
            default:
              return ''
          }
        })}
      </Layout>
    )
  }
}

export default BlocksTemplate

export const pageQuery = graphql`
  query BlockPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        blocks {
          component
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
          title
          subtitle
          content
          orientation
          background
          button {
            url
            text
          }
          col1 {
            title
            content
          }
          col2 {
            title
            content
          }
          col3 {
            title
            content
          }
        }
      }
    }
  }
`
