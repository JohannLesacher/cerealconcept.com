import React from 'react'
import PageHeader from './pageHeader'
import BlockContent from './blockContent'

const PageContentContainer = (children, modePageSimple) => {
  if (modePageSimple) {
    return (
      <section className="section section-page-simple">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10">
              <div className="content">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  } else {
    return children
  }
}

const PageContent = ({data}) => {
  console.log(data)
  return PageContentContainer(
    <React.Fragment>
      {data.displayTitle ? (
        <PageHeader title={data.title} subtitle={data.subtitle} modePageSimple={data.modePageSimple} />
      ) : null}

      {data._rawContenu ? (
          <BlockContent blocks={data._rawContenu} />
        ) : null
      }
    </React.Fragment>
  , data.modePageSimple)
}

export default PageContent
