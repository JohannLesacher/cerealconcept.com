import React from 'react'

import Skill from './skill'
import ImageFormations from '../svg/skill_formations.svg';
import ImageSecurite from '../svg/skill_securite.svg';
import ImageSeo from '../svg/skill_seo.svg';
import ImageThemes from '../svg/skill_themes.svg';
import ImagePlugins from '../svg/skill_plugins.svg';
import ImageEcommerce from '../svg/skill_ecommerce.svg';

const Skills = () => (
  <section className="section section-skills">
    <div className="container">
      <header className="has-text-centered">
        <h4 className="pretitle has-text-primary is-3">Nos services</h4>
        <h2 className="title is-2 section-title">Comment pouvons-nous vous aider ?</h2>
      </header>
      <div className="skills">
        <Skill
          title="Développement de sites sur mesure"
          description="Vous souhaitez vous différencier, augmenter votre taux d’engagement ou laisser une impression positive durable chez vos visiteurs ? Nous pouvons concevoir ou refondre un site à votre image, dans le respect de votre charte graphique, pour renforcer votre marque ou votre service."
          keywords={['HTML5', 'Blade', 'CSS3', 'SASS', 'PHP7', 'WordPress', 'JavaScript', 'ReactJS', 'GatsbyJS', 'AnimeJS', 'jQuery' ]}
          image={<ImageThemes/>}
        />
        <Skill
          title="Création de boutiques e-commerce"
          description="Vous désirez lancer votre affaire en ligne, vendre votre marque et vos produits sur internet ? Notre équipe vous accompagne de votre stratégie e-marketing au déploiement de votre plateforme e-commerce fiable, intuitive et sécurisée."
          keywords={['e-shop', 'e-transactions', 'TPE', 'VAD', 'worldwide', 'PayPal', 'Stripe', 'Cyberplus', 'Monetico Paiement', 'Sherlock’s', 'Colissimo', 'UPS', 'Sendcloud']}
          image={<ImageEcommerce/>}
        />
        <Skill
          title="Développement de fonctionnalités sur mesure"
          description="Vous souhaitez étendre les fonctionnalités de votre site, améliorer votre espace d’administration, faciliter votre gestion et votre communication en interne ou encore dialoguer avec une API ? Nous pouvons réaliser des outils sur-mesure, élégants et flexibles."
          keywords={['plugins','extensions', 'modules', 'back-office', 'fonctionnalités', 'API', 'applications']}
          image={<ImagePlugins/>}
        />
        <Skill
          title="Renforcement de votre référencement"
          description="Vous désirez stimuler votre visibilité sur la toile, concurrencer les entreprises en tête des résultats de recherche google dans votre secteur d’activité ? Nous ciblons et travaillons sur les points faibles de votre interface avec une campagne de référencement naturel (SEO) optimale et aboutie."
          keywords={['netlinking', 'contenu', 'maillage', 'mots-clés', 'referencement naturel', 'optimisation', 'metadonnées', 'backlinks', 'blog']}image={<ImageSeo/>}
        />
        <Skill
          title="Sécurisation et maintenance technique"
          description="Vous voulez mettre à jour votre site web, nettoyer et sécuriser votre plateforme d’un problème technique ou d’un virus ? Nous identifions les failles de sécurité et vous proposons un ensemble d’interventions ciblées, pouvant aboutir à un suivi régulier selon la nature du problème."
          keywords={['debug','audit', 'dépannage', 'nettoyage', 'sécurisation', 'surveillance']}image={<ImageSecurite/>}
        />
        <Skill
          title="Conseil, expertise technique et formations"
          description="Vous voulez vous re positionner sur la toile ? sur votre image sur internet ? sur Vous utilisez WordPress mais aimeriez étendre vos compétences ? Après 7 ans à travailler avec, nous pouvons sûrement répondre à vos questions."
          keywords={['accompagnement', 'benchmark', 'communication', 'questions', 'réponses']}
          image={<ImageFormations/>}
        />
      </div>
    </div>
  </section>
)

Skills.defaultProps = {
  // siteTitle: ``,
}

export default Skills
