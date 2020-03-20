import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import '../styles/avenir.scss'
import 'typeface-work-sans';

import '../styles/main.scss'

const Layout = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={className}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="main">
          {children}
        </main>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
}

export default Layout
