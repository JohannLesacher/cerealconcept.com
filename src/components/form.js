import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      prenom_et_nom: "",
      email: "",
      telephone: "",
      entreprise_ou_organisation: "",
      politique_de_conf: "",
      message: "",
      position: "",
    }
  }

  eventListenerInputFocus = (label, e) => {
    // console.log('eventListenerInputFocus')
    label.classList.remove('is-placeholder')
  }

  eventListenerInputFocusOut = (input, label, e) => {
    // console.log('eventListenerInputFocusOut')
    if (input.value === '') {
      label.classList.add('is-placeholder')
    }
  }

  eventListenerSubmit = ['submit', (e) => {
    // console.log('eventListenerSubmit')
    this.props.handleSubmit(e, this.state)
  }]

  componentDidMount() {
    if (document !== undefined) {

      // Submit Handler
      const form = document.querySelector('form[name="contact"]')

      form.addEventListener(...this.eventListenerSubmit)

      // Input placeholders
      const inputs = document.querySelectorAll('form[name="contact"] .input,form[name="contact"] .textarea')
      const context = this

      inputs.forEach(function(input) {
        let inputName = input.getAttribute('name')
        let label = document.querySelector('form[name="contact"] .label[for='+inputName+']')

        if (label) {
          input.addEventListener('focus', context.eventListenerInputFocus.bind(this, label))
          input.addEventListener('focusout', context.eventListenerInputFocusOut.bind(this, input, label))
        }
      })
    }
  }

  componentWillUnmount() {
    const form = document.querySelector('form[name="contact"]')
    form.removeEventListener(...this.eventListenerSubmit)

    const inputs = document.querySelectorAll('form[name="contact"] .input,form[name="contact"] .textarea')
    const context = this

    inputs.forEach(function(input) {
      input.removeEventListener('focus', context.eventListenerInputFocus)
      input.removeEventListener('focusout', context.eventListenerInputFocusOut)
    })
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  reset() {
    // console.log('reset')
    this.setState({
      prenom_et_nom: "",
      email: "",
      telephone: "",
      entreprise_ou_organisation: "",
      politique_de_conf: "",
      message: "",
      position: "",
    })
  }

  render() {
    const {
      prenom_et_nom,
      email,
      telephone,
      entreprise_ou_organisation,
      politique_de_conf,
      message,
      position } = this.state

    return (
      <form name="contact" data-netlify="true" netlify-honeypot="position">
        <div className="columns is-centered">
          <div className="column is-5">
            
            <div className="field">
              <div className="control">
                <label className="label is-placeholder" htmlFor="prenom_et_nom">Prénom & Nom</label>
                <input className="input" type="text" name="prenom_et_nom" value={prenom_et_nom} onChange={this.handleChange} required />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="label is-placeholder" htmlFor="email">Email</label>
                <input className="input" type="email" name="email" value={email} onChange={this.handleChange} required />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="label is-placeholder" htmlFor="telephone">Téléphone</label>
                <input className="input" type="tel" value={telephone} onChange={this.handleChange} name="telephone" />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="label is-placeholder" htmlFor="entreprise_ou_organisation">Entreprise ou organisation</label>
                <input className="input" type="text" value={entreprise_ou_organisation} onChange={this.handleChange} name="entreprise_ou_organisation" required />
              </div>
            </div>

          </div>
          <div className="column is-5 is-offset-1">
            <div className="field">
              <div className="control">
                <label className="label is-placeholder" htmlFor="message">Message</label>
                <textarea className="textarea" rows="8" value={message} onChange={this.handleChange} name="message" required></textarea>
              </div>
            </div>

            <div className="field">
              <label className="checkbox">
                <input type="checkbox" value={politique_de_conf} onChange={this.handleChange} name="politique_de_conf" required />
                J'accepte la <a href="/politique-de-confidentialite" target="_blank">politique de confidentialité</a>
              </label>
            </div>

            <div className="is-hidden" hidden aria-hidden="true">
              <input type="text" name="position" value={position} onChange={this.handleChange} />
            </div>

            <div className="field">
              <div className="buttons is-right">
                <button className="button is-rounded is-primary" type="submit">Envoyer</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default Form
