/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

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
    const modalButtons = document.querySelectorAll('.modal-button');

    modalButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        let target = button.dataset.target;
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
