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

  render() {
    return (
      <section className="section section-contact">
        <div className="notifications">
          {this.state.success &&
            <Message
                type="success"
                text="Merci pour votre sollicitation, nous allons revenir vers vous rapidement. Bonne journée !"
                hide={this.hideNotifications}
                />
          }
        </div>
        <div className="has-text-centered">
          <h4 className="title">Contact</h4>
          <h2 className="subtitle">Ça vous semble intéressant ? Contactez-nous.</h2>

          <button data-target="#contact-modal" className="button is-primary is-rounded is-medium modal-button">
            Lancer la discussion
          </button>
        </div> 
        <div className="modal" id="contact-modal">
          <button className="modal-close is-large" aria-label="close"></button>
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="section">
              <Form handleSubmit={this.handleSubmit} ref="contactform"/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
