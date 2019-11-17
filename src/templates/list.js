import React from 'react'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import PostList from '../components/post-list'
import SEO from '../components/seo'

class ListTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteDescription = post.excerpt
    const childPosts = this.props.pageContext.children

    return (
      <Layout location={this.props.location}>
        <SEO description={siteDescription} title={post.frontmatter.title} />
        <section className="section page-content">
          <div class="container article-header has-text-centered">
            <h1 class="title is-1">{post.frontmatter.title}</h1>
            <hr />
          </div>
          <main className="container content-container">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <hr />
            <PostList posts={childPosts} />
          </main>
        </section>
      </Layout>
    )
  }
}

export default ListTemplate

export const pageQuery = graphql`
  query ListPageBySlug($slug: String!) {
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
