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

  componentDidMount() {
    if (document !== undefined) {
      const inputs = document.querySelectorAll('form[name="contact"] .input,form[name="contact"] .textarea')

      inputs.forEach(function(input) {
        let inputName = input.getAttribute('name')
        let label = document.querySelector('form[name="contact"] .label[for='+inputName+']')

        if (label) {
          input.addEventListener('focus', function() {
            label.classList.remove('is-placeholder')
          })
          input.addEventListener('focusout', function() {
            if (input.value === '') {
              label.classList.add('is-placeholder')
            }
          })
        }
      })
    }
  }

  handleSuccess() {
    this.setState({success: true})
    this.refs.contactform.reset()
    const hideNotifications = this.hideNotifications

    setTimeout(function() {
      hideNotifications()
    }, 10000)
  }

  hideNotifications() {
    this.setState({success: false})
  }

  handleSubmit = (e, data) => {
    e.preventDefault()
    
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    })
      .then(() => this.handleSuccess())
      .catch(error => alert(error))

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
