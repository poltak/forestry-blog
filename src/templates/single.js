import React from 'react'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class SingleTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteDescription = post.excerpt

    return (
      <Layout location={this.props.location}>
        <SEO description={siteDescription} title={post.frontmatter.title} />
        <section className="section page-content">
          <div className="container article-header has-text-centered">
            <h1 className="title is-1">{post.frontmatter.title}</h1>
            {post.frontmatter.date && (
              <em className="is-size-6 has-text-grey">
                {post.frontmatter.date}
              </em>
            )}
            <hr />
          </div>
          <main className="container content-container">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </main>
        </section>
      </Layout>
    )
  }
}

export default SingleTemplate

export const pageQuery = graphql`
  query SinglePageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
