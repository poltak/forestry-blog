import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import SEO from './seo'
import '../css/main.scss'

import gatsbyIcon from '../images/gatsby-icon.png'

const Layout = ({ children, favIcon = gatsbyIcon }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            footer
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${favIcon}`,
            },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer content={data.site.siteMetadata.footer} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  favIcon: PropTypes.string,
  title: PropTypes.string,
}

export default Layout
