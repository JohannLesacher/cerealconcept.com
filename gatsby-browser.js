/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

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

// You can delete this file if you're not using it
exports.onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
  }
}

exports.onRouteUpdate = function({ location }) {
  if (document !== undefined) {

    // Open Modal actions
    const modalButtons = document.querySelectorAll('.modal-button')

    modalButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        let target = button.dataset.target
        let modal = document.querySelector(target)
        let html = document.querySelector('html')
        
        modal.classList.toggle('is-active')
        html.classList.toggle('is-clipped')
      })
    })

    // Close Modal actions
    const modalClose = document.querySelectorAll('.modal-close, .modal-background')

    modalClose.forEach(function(close) {
      close.addEventListener('click', function() {
        let modals = document.querySelectorAll('.modal')
        let html = document.querySelector('html')

        modals.forEach(function(modal) {
          modal.classList.remove('is-active')
        })
        html.classList.remove('is-clipped')
      })
    })
  }
}

exports.onInitialClientRender = () => {
  console.log('onInitialClientRender')
  if (window !== undefined && document !== undefined) {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {

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
  }
}
