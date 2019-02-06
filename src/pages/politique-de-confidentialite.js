import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PagePolitiqueDeConfidentialite = () => (
  <Layout>
    <SEO title="Politque de confidentialité" />
    <section className="section section-poldeconf">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10">
            <div className="content">
              <h1 className="title is-1">Politique de confidentialité</h1>
              <h3 className="subtitle is-spaced is-3">Sécurité et protection des données personnelles</h3>

              <h3 className="title is-3">Définitions :</h3>
              <ul>
                <li><strong>L'Éditeur</strong> : La personne, physique ou morale, qui édite les services de communication au public en ligne.</li>
                <li><strong>Le Site</strong> : L'ensemble des sites, pages Internet et services en ligne proposés par l'Éditeur.</li>
                <li><strong>L'Utilisateur </strong>: La personne utilisant le Site et les services.</li>
              </ul>
              
              <h4 className="title is-4">Nature des données collectées</h4>
              
              <h5 className="title is-5">Dans le cadre de l'utilisation des Sites, l'Éditeur est susceptible de collecter les catégories de données suivantes concernant ses Utilisateurs :</h5>

              <p>Données d'état-civil, d'identité, d'identification...</p>

              <h4 className="title is-4">Communication des données personnelles à des tiers</h4>
              <h5 className="title is-5">Pas de communication à des tiers</h5>
              <p>Vos données ne font l'objet d'aucune communication à des tiers. Vous êtes toutefois informés qu'elles pourront être divulguées en application d'une loi, d'un règlement ou en vertu d'une décision d'une autorité réglementaire ou judiciaire compétente.</p>

              <h4 className="title is-4">Information préalable pour la communication des données personnelles à des tiers en cas de fusion / absorption</h4>
              <h5 className="title is-5">Collecte de l’opt-in (consentement) préalable à la transmission des données suite à une fusion / acquisition</h5>
              <p>Dans le cas où nous prendrions part à une opération de fusion, d’acquisition ou à toute autre forme de cession d’actifs, nous nous engageons à obtenir votre consentement préalable à la transmission de vos données personnelles et à maintenir le niveau de confidentialité de vos données personnelles auquel vous avez consenti.</p>
              <h4 className="title is-4">Finalité de la réutilisation des données personnelles collectées</h4>
              <h5 className="title is-5">Effectuer des opérations relatives à la prospection</h5>
              <ul>
                <li>la gestion d'opérations techniques de prospection (ce qui inclut notamment les opérations techniques comme la normalisation, l'enrichissement et la déduplication)</li>
                <li>la sélection de personnes pour réaliser des actions de fidélisation, de prospection, de sondage, de test produit et de promotion. Sauf consentement des personnes concernées recueilli dans les conditions prévues à l'article 6, ces opérations ne doivent pas conduire à l'établissement de profils susceptibles de faire apparaître des données sensibles (origines raciales ou ethniques, opinions philosophiques, politiques, syndicales, religieuses, vie sexuelle ou santé des personnes)</li>
                <li>la réalisation d'opérations de sollicitations</li>
              </ul>
              
              <h4 className="title is-4">Agrégation des données</h4>
              <h5 className="title is-5">Agrégation avec des données non personnelles</h5>
              <p>Nous pouvons publier, divulguer et utiliser les informations agrégées (informations relatives à tous nos Utilisateurs ou à des groupes ou catégories spécifiques d'Utilisateurs que nous combinons de manière à ce qu'un Utilisateur individuel ne puisse plus être identifié ou mentionné) et les informations non personnelles à des fins d'analyse du secteur et du marché, de profilage démographique, à des fins promotionnelles et publicitaires et à d'autres fins commerciales.</p>

              <h5 className="title is-5">Agrégation avec des données personnelles disponibles sur les comptes sociaux de l'Utilisateur</h5>
              <p>Si vous connectez votre compte à un compte d’un autre service afin de faire des envois croisés, ledit service pourra nous communiquer vos informations de profil, de connexion, ainsi que toute autre information dont vous avez autorisé la divulgation. Nous pouvons agréger les informations relatives à tous nos autres Utilisateurs, groupes, comptes, aux données personnelles disponibles sur l’Utilisateur.</p>

              <h4 className="title is-4">Collecte des données d'identité</h4>
              <h5 className="title is-5">Consultation libre</h5> 
              <p>La consultation du Site ne nécessite pas d'inscription ni d'identification préalable. Elle peut s'effectuer sans que vous ne communiquiez de données nominatives vous concernant (nom, prénom, adresse, etc). Nous ne procédons à aucun enregistrement de données nominatives pour la simple consultation du Site.</p>

              <h4 className="title is-4">Collecte des données d'identification</h4>
              <h5 className="title is-5">Utilisation de l'identifiant de l'utilisateur pour proposition de mise en relation et offres commerciales</h5>
              <p>Nous utilisons vos identifiants électroniques pour rechercher des relations présentes par connexion, par adresse mail ou par services. Nous pouvons utiliser vos informations de contact pour permettre à d'autres personnes de trouver votre compte, notamment via des services tiers et des applications clientes. Vous pouvez télécharger votre carnet d'adresses afin que nous soyons en mesure de vous aider à trouver des connaissances sur notre réseau ou pour permettre à d'autres Utilisateurs de notre réseau de vous trouver. Nous pouvons vous proposer des suggestions, à vous et à d'autres Utilisateurs du réseau, à partir des contacts importés de votre carnet d’adresses. Nous sommes susceptibles de travailler en partenariat avec des sociétés qui proposent des offres incitatives. Pour prendre en charge ce type de promotion et d'offre incitative, nous sommes susceptibles de partager votre identifiant électronique.</p>

              <h4 className="title is-4">Collecte des données du terminal</h4>
              <h5 className="title is-5">Collecte des données de profilage et des données techniques à des fins de fourniture du service</h5>
              <p>Certaines des données techniques de votre appareil sont collectées automatiquement par le Site. Ces informations incluent notamment votre adresse IP, fournisseur d'accès à Internet, configuration matérielle, configuration logicielle, type et langue du navigateur... La collecte de ces données est nécessaire à la fourniture des services.</p>

              <h5 className="title is-5">Collecte des données techniques à des fins publicitaires, commerciales et statistiques</h5>
              <p>Les données techniques de votre appareil sont automatiquement collectées et enregistrées par le Site, à des fins publicitaires, commerciales et statistiques. Ces informations nous aident à personnaliser et à améliorer continuellement votre expérience sur notre Site. Nous ne collectons ni ne conservons aucune donnée nominative (nom, prénom, adresse...) éventuellement attachée à une donnée technique. Les données collectées sont susceptibles d’être revendues à des tiers.</p>

              <h4 className="title is-4">Cookies</h4>
              <h5 className="title is-5">Durée de conservation des cookies</h5>
              <p>Conformément aux recommandations de la CNIL, la durée maximale de conservation des cookies est de 13 mois au maximum après leur premier dépôt dans le terminal de l'Utilisateur, tout comme la durée de la validité du consentement de l’Utilisateur à l’utilisation de ces cookies. La durée de vie des cookies n’est pas prolongée à chaque visite. Le consentement de l’Utilisateur devra donc être renouvelé à l'issue de ce délai.</p>

              <h5 className="title is-5">Finalité cookies</h5>
              <p>Les cookies peuvent être utilisés pour des fins statistiques notamment pour optimiser les services rendus à l'Utilisateur, à partir du traitement des informations concernant la fréquence d'accès, la personnalisation des pages ainsi que les opérations réalisées et les informations consultées.</p>
              <p>Vous êtes informé que l'Éditeur est susceptible de déposer des cookies sur votre terminal. Le cookie enregistre des informations relatives à la navigation sur le service (les pages que vous avez consultées, la date et l'heure de la consultation...) que nous pourrons lire lors de vos visites ultérieures.</p>

              <h5 className="title is-5">Droit de l'Utilisateur de refuser les cookies</h5>
              <p>Vous reconnaissez avoir été informé que l'Éditeur peut avoir recours à des cookies. Si vous ne souhaitez pas que des cookies soient utilisés sur votre terminal, la plupart des navigateurs vous permettent de désactiver les cookies en passant par les options de réglage.</p>

              <h4 className="title is-4">Conservation des données techniques</h4>
              <h5 className="title is-5">Durée de conservation des données techniques</h5> 
              <p>Les données techniques sont conservées pour la durée strictement nécessaire à la réalisation des finalités visées ci-avant.</p>

              <h4 className="title is-4">Délai de conservation des données personnelles et d'anonymisation</h4>
              <h5 className="title is-5">Pas de conservation des données</h5>
              <p>Nous ne conservons aucune donnée personnelle au delà de votre durée de connexion au service pour les finalités décrites dans les présentes CGU.</p>

              <h5 className="title is-5">Suppression des données après suppression du compte </h5>
              <p>Des moyens de purge de données sont mis en place afin d'en prévoir la suppression effective dès lors que la durée de conservation ou d'archivage nécessaire à l'accomplissement des finalités déterminées ou imposées est atteinte. Conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, vous disposez par ailleurs d'un droit de suppression sur vos données que vous pouvez exercer à tout moment en prenant contact avec l'Éditeur.</p>

              <h5 className="title is-5">Suppression des données après 3 ans d'inactivité </h5>
              <p>Pour des raisons de sécurité, si vous ne vous êtes pas authentifié sur le Site pendant une période de trois ans, vous recevrez un e-mail vous invitant à vous connecter dans les plus brefs délais, sans quoi vos données seront supprimées de nos bases de données.</p>

              <h4 className="title is-4">Suppression du compte</h4>
              <h5 className="title is-5">Suppression du compte à la demande</h5>
              <p>L'Utilisateur a la possibilité de supprimer son Compte à tout moment, par simple demande à l'Éditeur OU par le menu de suppression de Compte présent dans les paramètres du Compte le cas échéant.</p>

              <h5 className="title is-5">Suppression du compte en cas de violation des CGU</h5>
              <p>En cas de violation d'une ou de plusieurs dispositions des CGU ou de tout autre document incorporé aux présentes par référence, l'Éditeur se réserve le droit de mettre fin ou restreindre sans aucun avertissement préalable et à sa seule discrétion, votre usage et accès aux services, à votre compte et à tous les Sites.</p>

              <h4 className="title is-4">Indications en cas de faille de sécurité décelée par l'Éditeur</h4>
              <h5 className="title is-5">Information de l'Utilisateur en cas de faille de sécurité</h5>
              <p>Nous nous engageons à mettre en oeuvre toutes les mesures techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au regard des risques d'accès accidentels, non autorisés ou illégaux, de divulgation, d'altération, de perte ou encore de destruction des données personnelles vous concernant. Dans l'éventualité où nous prendrions connaissance d'un accès illégal aux données personnelles vous concernant stockées sur nos serveurs ou ceux de nos prestataires, ou d'un accès non autorisé ayant pour conséquence la réalisation des risques identifiés ci-dessus, nous nous engageons à :</p>

              <ul>
                <li>Vous notifier l'incident dans les plus brefs délais ;</li>
                <li>Examiner les causes de l'incident et vous en informer ;</li>
                <li>Prendre les mesures nécessaires dans la limite du raisonnable afin d'amoindrir les effets négatifs et préjudices pouvant résulter dudit incident</li>
              </ul>

              <h5 className="title is-5">Limitation de la responsabilité </h5>
              <p>En aucun cas les engagements définis au point ci-dessus relatifs à la notification en cas de faille de sécurité ne peuvent être assimilés à une quelconque reconnaissance de faute ou de responsabilité quant à la survenance de l'incident en question.</p>

              <h4 className="title is-4">Transfert des données personnelles à l'étranger</h4>
              <h5 className="title is-5">Pas de transfert en dehors de l'Union européenne</h5>
              <p>L'Éditeur s'engage à ne pas transférer les données personnelles de ses Utilisateurs en dehors de l'Union européenne.</p>

              <h4 className="title is-4">Modification des CGU et de la politique de confidentialité</h4>
              <h5 className="title is-5">En cas de modification des présentes CGU, engagement de ne pas baisser le niveau de confidentialité de manière substantielle sans l'information préalable des personnes concernées </h5>
              <p>Nous nous engageons à vous informer en cas de modification substantielle des présentes CGU, et à ne pas baisser le niveau de confidentialité de vos données de manière substantielle sans vous en informer et obtenir votre consentement.</p>

              <h4 className="title is-4">Droit applicable et modalités de recours</h4>
              <h5 className="title is-5">Application du droit français (législation CNIL) et compétence des tribunaux</h5>
              <p>Les présentes CGU et votre utilisation du Site sont régies et interprétées conformément aux lois de France, et notamment à la Loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. Le choix de la loi applicable ne porte pas atteinte à vos droits en tant que consommateur conformément à la loi applicable de votre lieu de résidence. Si vous êtes un consommateur, vous et nous acceptons de se soumettre à la compétence non-exclusive des juridictions françaises, ce qui signifie que vous pouvez engager une action relative aux présentes CGU en France ou dans le pays de l'UE dans lequel vous vivez. Si vous êtes un professionnel, toutes les actions à notre encontre doivent être engagées devant une juridiction en France. </p>

              <p>En cas de litige, les parties chercheront une solution amiable avant toute action judiciaire. En cas d'échec de ces tentatives, toutes contestations à la validité, l'interprétation et / ou l'exécution des présentes CGU devront être portées même en cas de pluralité des défendeurs ou d'appel en garantie, devant les tribunaux français.</p>

              <h4 className="title is-4">Portabilité des données</h4>
              <p>L'Éditeur s'engage à vous offrir la possibilité de vous faire restituer l'ensemble des données vous concernant sur simple demande. L'Utilisateur se voit ainsi garantir une meilleure maîtrise de ses données, et garde la possibilité de les réutiliser. Ces données devront être fournies dans un format ouvert et aisément réutilisable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default PagePolitiqueDeConfidentialite
