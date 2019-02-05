import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Image from '../svg/lost.svg'

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
const debounce = (func, wait, immediate) => {
  var timeout
  return () => {
    var context = this, args = arguments
    var later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

class NotFoundPage extends React.Component {
  componentDidMount() {
    if (window !== undefined && document !== undefined) {
      const header = document.querySelector('.site-header')
      const footer = document.querySelector('.site-footer')
      const main = document.querySelector('.main')

      const applyMinMainHeight = () => {
        console.log(window.innerHeight, header.offsetHeight, footer.offsetHeight)
        const minMainHeight = window.innerHeight - header.offsetHeight - footer.offsetHeight
        console.log(minMainHeight)
        main.style.minHeight = minMainHeight +"px"
      }

      if (main && main.offsetHeight < window.innerHeight) {
        applyMinMainHeight()
        window.onresize = debounce(applyMinMainHeight, 100)
      }
    }
  }

  componentWillUnmount() {
    if(window !== undefined) {
      // Unsubscribe
      window.onresize = null;
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Erreur 404 : Page Introuvable" />
        <section className="section section-404">
          <div className="columns is-centered">
            <div className="column is-narrow has-text-centered">
              <Image className="image-404" />
              <h1 className="title is-1">Erreur 404 / Introuvable</h1>
              <h3 className="subtitle is-3">La page que vous souhaitiez visiter n'existe plus <span role="img" aria-label="smiley triste">😞</span></h3>
              <Link to="/" className="button is-primary is-rounded">Retour à l'accueil</Link>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default NotFoundPage
