import React from 'react'
import Form from './form'
import Message from './message'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Contact extends React.Component {
  constructor() {
    super()

    this.state = {
      success: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
    this.hideNotifications = this.hideNotifications.bind(this)
  }

  handleSuccess() {
    this.setState({success: true})
    this.refs.contactform.reset()

    // Hide modal
    document.querySelector('#contact-modal').classList.remove('is-active')
    document.querySelector('html').classList.remove('is-clipped')

    const hideNotifications = this.hideNotifications

    setTimeout(function() {
      hideNotifications()
    }, 10000)
  }

  hideNotifications() {
    this.setState({success: false})
  }

  handleSubmit = (e, data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    })
      .then(() => this.handleSuccess())
      .catch(error => console.log(error))

    e.preventDefault()
  }

  eventListenerOpen = (button, e) => {
    let target = button.dataset.target
    let modal = document.querySelector(target)
    let html = document.querySelector('html')
    
    modal.classList.add('is-active')
    html.classList.add('is-clipped')
  }

  eventListenerClose = ['click', () => {
    let modals = document.querySelectorAll('.modal')
    let html = document.querySelector('html')

    modals.forEach(function(modal) {
      modal.classList.remove('is-active')
    })
    html.classList.remove('is-clipped')
  }]

  componentDidMount() {
    if (document !== undefined) {
      // Remove is-clipped au cas où
      document.querySelector('html').classList.remove('is-clipped')
      const context = this

      // Open Modal actions
      const modalButtons = document.querySelectorAll('.modal-button')

      modalButtons.forEach(function(button) {
        button.addEventListener('click', context.eventListenerOpen.bind(this, button))
      })

      // Close Modal actions
      const modalClose = document.querySelectorAll('.modal-close, .modal-background')

      modalClose.forEach(function(close) {
        close.addEventListener(...context.eventListenerClose)
      })

    }
  }

  componentWillUnmount() {
    if (document !== undefined) {
      const context = this
      // Open Modal actions
      const modalButtons = document.querySelectorAll('.modal-button')
      modalButtons.forEach(function(button) {
        button.removeEventListener(...context.eventListenerOpen)
      })

      // Close Modal actions
      const modalClose = document.querySelectorAll('.modal-close, .modal-background')
      modalClose.forEach(function(close) {
        close.removeEventListener(...context.eventListenerClose)
      })

    }
  }

  render() {
    return (
      <section className="section-contact-form">
        <div className="notifications">
          {this.state.success &&
            <Message
                type="success"
                text="Merci pour votre sollicitation, nous allons revenir vers vous rapidement. Bonne journée !"
                hide={this.hideNotifications}
                />
          }
        </div>
        <div className="modal" id="contact-modal">
          <button className="modal-close is-large" aria-label="close"></button>
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="section">
              <div className="block has-text-centered">
                <h2 className="title is-2">Contactez-nous !</h2>
                <h4 className="subtitle is-4">Nous vous répondrons rapidement</h4>
              </div>
              <hr/>
              <Form handleSubmit={this.handleSubmit} ref="contactform"/>
              <hr/>
              <div className="block">
                <h4 className="title is-4">Nous sommes aussi joignables par téléphone</h4>
                <ul>
                  <li>Johann : 06 71 54 15 53</li>
                  <li>Adrien : 06 58 47 78 49</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
