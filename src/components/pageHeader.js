import React from 'react'

const PageHeaderContainer = (children, modePageSimple) => {
  if (modePageSimple) {
    return children
  } else {
    return (
      <section className="section section-page-header">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10">
              <header className="has-text-centered">
                {children}
              </header>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const PageHeader = ({title, subtitle, modePageSimple}) => {
  return PageHeaderContainer(
    <React.Fragment>
      {title ? (
        <h1 className="title is-1">
          {title}
        </h1>
        ) : null
      }
      {subtitle ? (
        <h3 className={modePageSimple ? "subtitle is-spaced is-6" : "subtitle is-4"}>
          {subtitle}
        </h3>
        ) : null
      }
    </React.Fragment>
  , modePageSimple)
}

export default PageHeader
