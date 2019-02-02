import React from 'react'
import { Link } from 'gatsby'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      prenom_et_nom: "",
      email: "",
      telephone: "",
      entreprise_ou_organisation: "",
      politique_de_conf: "",
      message: ""
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  reset() {
    this.setState({
      prenom_et_nom: "",
      email: "",
      telephone: "",
      entreprise_ou_organisation: "",
      politique_de_conf: "",
      message: ""
    })
  }

  render() {
    const {
      prenom_et_nom,
      email,
      telephone,
      entreprise_ou_organisation,
      politique_de_conf,
      message } = this.state

    return (
      <form name="contact" onSubmit={this.props.handleSubmit}>
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

            <div data-netlify-recaptcha="true"></div>

            <div className="field">
              <label className="checkbox">
                <input type="checkbox" value={politique_de_conf} onChange={this.handleChange} name="politique_de_conf" required />
                J'accepte la <Link to="/">politique de confidentialité</Link>
              </label>
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