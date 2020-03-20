import React from 'react'
import { Link } from 'gatsby'

import Figure from './blocks/figure'
import About from './blocks/about'
import Landing from './blocks/landing'
import Skills from './blocks/skills'
import ContactCta from './blocks/contactCta'
import ReferencesList from './blocks/referencesList'

const Container = (props) => {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}

const serializers = {
  types: {
    figure: Figure,
    aPropos: About,
    hero: Landing,
    skills: Skills,
    cta: ContactCta,
    listeClients: ReferencesList,
    block: props => {
      const style = props.node.style || "normal";

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        if (level < 3) {
          return React.createElement(`h${level}`, {/*className: `title is-${level}`*/}, props.children);
        } else {
          return React.createElement(`h${level}`, {/*className: `subtitle is-${level - 1}`*/}, props.children);
        }
      }

      if (style === "blockquote") {
        return (
          <blockquote>{props.children}</blockquote>
        )
      }

      if (props.children.length === 1 && props.children[0] === "") {
        return (
          <br/>
        )
      }

      return (
        <p>{props.children}</p>
      )
    },
  },
  marks: {
    externalLink: ({ children, mark }) =>
      mark.blank ? (
        <a href={mark.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={mark.href}>{children}</a>
      ),
    internalLink: ({ children, mark }) => {
      return (
        <Link to={'/'+mark.item.slug.current}>{children}</Link>
      )
    },
    "align-right": ({ children, mark }) => {
      return (
        <p className="has-text-right">{children}</p>
      )
    },
    "align-center": ({ children, mark }) => {
      return (
        <p className="has-text-centered">{children}</p>
      )
    },
    "align-left": ({ children, mark }) => {
      return (
        <p className="has-text-left">{children}</p>
      )
    },
  },
  container: Container,
}

export default serializers
