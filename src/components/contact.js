import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Contact = () => (
  <section className="section section-contact has-background-light">
    <div className="container">
      <h2 className="title is-3">Contact</h2>
      <div className="columns">
        <div className="column is-4">
          Tous vos rêves sont réalisables, contactez-nous.
        </div>
        <div className="column is-8">
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="field">
              <label className="label">Prénom & Nom</label>
              <div className="control">
                <input className="input" type="text" name="prenom_et_nom" placeholder="Comment vous appelez-vous ?" required />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" name="email" placeholder="A quelle adresse peut-on vous joindre" required />
              </div>
            </div>

            <div className="field">
              <label className="label">Téléphone</label>
              <div className="control">
                <input className="input" type="tel" name="telephone" placeholder="Si vous préférez être contacté par téléphone" />
              </div>
            </div>

            <div className="field">
              <label className="label">Entreprise ou organisation</label>
              <div className="control">
                <input className="input" type="text" name="entreprise_ou_organisation" placeholder="Comment vous appelez-vous ?" required />
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                  J'accepte la <Link to="/">politique de confidentialité</Link>
                </label>
              </div>
            </div>

            <div data-netlify-recaptcha="true"></div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-rounded is-primary" type="submit">Envoyer</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
)

Contact.propTypes = {
  // siteTitle: PropTypes.string,
}

Contact.defaultProps = {
  // siteTitle: ``,
}

export default Contact
