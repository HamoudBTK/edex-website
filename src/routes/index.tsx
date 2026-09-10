import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import heroImage from "../assets/edex-hero.jpg";
import poleOneImage from "../assets/edex-pole-1.jpg";
import poleTwoImage from "../assets/edex-pole-2.jpg";
import poleThreeImage from "../assets/edex-pole-3.jpg";
import poleFourImage from "../assets/edex-pole-4.jpg";
import poleFiveImage from "../assets/edex-pole-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EdEx — L’allié des esprits brillants" },
      {
        name: "description",
        content:
          "EdEx accompagne chaque potentiel, de l’apprentissage à la concrétisation de projets à fort impact au Bénin.",
      },
      { property: "og:title", content: "EdEx — L’allié des esprits brillants" },
      {
        property: "og:description",
        content:
          "Un écosystème béninois pour apprendre, choisir, construire, évoluer et transmettre.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EdExHome,
});

const journey = [
  { number: "01", title: "Enfant / Élève", note: "Comprendre ses forces", href: "#pole-1" },
  { number: "02", title: "Jeune adulte", note: "Choisir sa trajectoire", href: "#pole-2" },
  { number: "03", title: "Jeune diplômé", note: "Entrer ou entreprendre", href: "#pole-3" },
  { number: "04", title: "Acteur opérationnel", note: "Structurer pour durer", href: "#pole-4" },
  { number: "05", title: "Private Equity", note: "Donner les moyens d’exister", href: "#pole-5" },
];

const verbs = ["Apprendre", "Choisir", "Construire", "Évoluer", "Transmettre"];

function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <a className={`editorial-link${light ? " editorial-link--light" : ""}`} href={href}>
      <span>{children}</span><span aria-hidden="true">↗</span>
    </a>
  );
}

function EdExHome() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
        <a className="wordmark" href="#top" aria-label="EdEx, accueil">Ed<span>Ex</span></a>
        <nav aria-label="Navigation principale">
          <a href="#parcours">Le parcours</a>
          <a href="#vision">La vision</a>
          <a href="#dialogue">Nous parler</a>
        </nav>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <img src={heroImage} alt="Une mentore accompagne un élève concentré sur son travail" width={1600} height={1200} />
        <div className="hero-shade" />
        <div className="hero-kicker">Cotonou · Bénin</div>
        <div className="hero-copy">
          <h1 id="hero-title">Ed<span>Ex</span></h1>
          <p>L’allié des<br />esprits brillants</p>
        </div>
        <a className="scroll-cue" href="#commencement"><span>Découvrir le parcours</span><span aria-hidden="true">↓</span></a>
        <p className="hero-side-note">Éducation · Potentiel · Impact</p>
      </section>

      <section id="commencement" className="opening-statement reveal-section">
        <p className="section-index">00 — Le commencement</p>
        <h2>Chaque potentiel<br /><em>commence quelque part.</em></h2>
        <div className="verb-line" aria-label="Apprendre, choisir, construire, évoluer, transmettre">
          {verbs.map((verb, index) => <span key={verb} style={{ animationDelay: `${index * 120}ms` }}>{verb}</span>)}
        </div>
      </section>

      <section className="constat" aria-labelledby="constat-title">
        <div className="constat-word" aria-hidden="true">Potentiel</div>
        <div className="constat-title-wrap">
          <p className="section-index">01 — Le constat</p>
          <h2 id="constat-title">Le potentiel<br /><em>ne suffit pas.</em></h2>
        </div>
        <p className="constat-intro">Entre une capacité et une trajectoire, il manque parfois une méthode, un choix juste, un accès ou une personne qui sait voir plus loin.</p>
        <div className="barriers">
          {[
            ["01", "Orientation"], ["02", "Méthode"], ["03", "Accès"],
            ["04", "Opportunités"], ["05", "Accompagnement"],
          ].map(([n, label]) => <div key={label}><span>{n}</span><strong>{label}</strong></div>)}
        </div>
      </section>

      <section id="parcours" className="journey" aria-labelledby="journey-title">
        <div className="journey-heading">
          <p className="section-index section-index--light">02 — Un écosystème, cinq portes</p>
          <h2 id="journey-title">Il n’existe pas<br />un seul chemin.</h2>
          <p>EdEx entre dans un parcours au moment où l’accompagnement peut changer sa direction.</p>
        </div>
        <div className="journey-list">
          {journey.map((item) => (
            <a href={item.href} className="journey-step" key={item.number}>
              <span className="journey-number">{item.number}</span>
              <span className="journey-name">{item.title}</span>
              <span className="journey-note">{item.note}</span>
              <span className="journey-arrow" aria-hidden="true">↘</span>
            </a>
          ))}
        </div>
      </section>

      <section id="pole-1" className="pole pole-one" aria-labelledby="pole-one-title">
        <div className="pole-one-image image-reveal"><img loading="lazy" src={poleOneImage} alt="Un élève travaille avec l’aide attentive de son accompagnateur" width={1200} height={1504} /></div>
        <div className="pole-one-copy">
          <p className="pole-label">Pôle 01 · Le point de départ</p>
          <h2 id="pole-one-title">Apprendre à<br /><em>se connaître.</em></h2>
          <p>Pour l’enfant et l’élève, la progression commence par une méthode qui lui ressemble et la confiance nécessaire pour avancer.</p>
          <ul className="keyword-list"><li>Méthode de travail</li><li>Suivi scolaire</li><li>Préparation aux examens</li><li>Confiance</li><li>Découverte des forces</li></ul>
        </div>
        <p className="pole-one-quote">Avant de savoir où aller,<br />il faut découvrir ce que l’on porte.</p>
      </section>

      <section id="pole-2" className="pole pole-two" aria-labelledby="pole-two-title">
        <div className="pole-two-top">
          <p className="pole-label">Pôle 02 · Le choix</p>
          <span className="big-number" aria-hidden="true">02</span>
          <h2 id="pole-two-title">Construire<br />consciemment<br /><em>sa trajectoire.</em></h2>
        </div>
        <div className="pole-two-image image-reveal"><img loading="lazy" src={poleTwoImage} alt="Une étudiante examine ses documents de candidature" width={1504} height={1104} /></div>
        <div className="pole-two-details">
          <p>Le post-bac transforme les possibles en décisions. EdEx aide à lire le terrain, à préparer chaque étape et à choisir avec lucidité.</p>
          <div className="detail-columns"><span>Orientation</span><span>Choix académiques</span><span>Candidatures & financement</span><span>Mémoire & thèse</span><span>Méthodologie académique</span><span>Préparation aux oraux</span></div>
        </div>
      </section>

      <section id="pole-3" className="pole pole-three" aria-labelledby="pole-three-title">
        <div className="pole-three-intro">
          <p className="pole-label pole-label--light">Pôle 03 · Le passage à l’acte</p>
          <h2 id="pole-three-title">Un même potentiel.<br /><em>Deux trajectoires possibles.</em></h2>
        </div>
        <div className="fork" aria-label="Deux accompagnements de même importance">
          <div className="fork-origin"><span>Jeune diplômé</span><i /></div>
          <div className="fork-path fork-path--left">
            <span className="fork-letter">A</span><h3>Placement<br />des talents</h3>
            <p>Rendre les capacités lisibles, préparer la rencontre et ouvrir l’accès aux bonnes opportunités.</p>
            <ul><li>CV & positionnement</li><li>Offres & opportunités</li><li>Entretiens & insertion</li></ul>
          </div>
          <div className="fork-path fork-path--right">
            <span className="fork-letter">B</span><h3>Incubation &<br />matérialisation</h3>
            <p>Passer de l’intuition à la structure, puis de la structure à une réalité qui peut grandir.</p>
            <ul><li>Idée & clarification</li><li>Structuration</li><li>Développement & réalisation</li></ul>
          </div>
        </div>
        <figure className="pole-three-image image-reveal"><img loading="lazy" src={poleThreeImage} alt="De jeunes diplômés construisent ensemble un prototype" width={1600} height={1056} /><figcaption>Construire vaut autant qu’entrer. Les deux trajectoires comptent.</figcaption></figure>
      </section>

      <section id="pole-4" className="pole pole-four" aria-labelledby="pole-four-title">
        <div className="pole-four-image image-reveal"><img loading="lazy" src={poleFourImage} alt="Une entrepreneure examine le travail réalisé dans son atelier" width={1104} height={1504} /></div>
        <div className="pole-four-copy">
          <p className="pole-label">Pôle 04 · Consolider</p>
          <h2 id="pole-four-title">Faire mieux.<br /><em>Et tenir dans la durée.</em></h2>
          <p>Pour les entrepreneurs, professionnels et organisations déjà en mouvement, EdEx devient un regard exigeant, un cadre et une présence dans le temps.</p>
          <ol className="operational-steps"><li><span>01</span>Diagnostiquer</li><li><span>02</span>Structurer</li><li><span>03</span>Améliorer la performance</li><li><span>04</span>Suivre & consolider</li></ol>
        </div>
      </section>

      <section id="pole-5" className="private-equity" aria-labelledby="private-title">
        <div className="private-image"><img loading="lazy" src={poleFiveImage} alt="Une équipe analyse ensemble un projet autour d’une maquette" width={1600} height={1152} /></div>
        <div className="private-overlay" />
        <div className="private-copy">
          <p className="pole-label pole-label--light">Pôle 05 · EdEx Private Equity</p>
          <h2 id="private-title">Un outil,<br /><em>pas un sommet.</em></h2>
          <p>Le capital ne conclut pas le parcours. Il donne aux projets à fort potentiel les moyens d’exister — et à EdEx la capacité d’accompagner plus loin.</p>
        </div>
        <p className="private-shift">Accompagner les individus <span>→</span> donner aux projets les moyens d’exister</p>
      </section>

      <section className="ecosystem" aria-labelledby="ecosystem-title">
        <div className="ecosystem-heading"><p className="section-index">03 — L’écosystème</p><h2 id="ecosystem-title">Chaque étape nourrit<br /><em>la suivante.</em></h2></div>
        <div className="ecosystem-orbit" aria-label="Personne, parcours, besoin, accompagnement, évolution, impact">
          <svg viewBox="0 0 800 480" role="presentation" aria-hidden="true"><path d="M60 278C142 50 372 30 412 218S670 461 750 170" /><path d="M102 362C245 452 364 366 432 246S638 88 712 112" /></svg>
          <span className="eco-word eco-1">Une personne</span><span className="eco-word eco-2">Un parcours</span><span className="eco-word eco-3">Un besoin</span><span className="eco-word eco-4">Un accompagnement</span><span className="eco-word eco-5">Une évolution</span><span className="eco-word eco-6">Un impact</span>
          <div className="eco-center">Ed<span>Ex</span></div>
        </div>
        <p className="ecosystem-note">Les pôles ne sont pas des destinations séparées. Ils forment un système vivant, capable de retrouver une personne là où elle se trouve.</p>
      </section>

      <section id="vision" className="vision" aria-labelledby="vision-title">
        <p className="section-index section-index--light">04 — La vision</p>
        <h2 id="vision-title">Et si l’éducation<br />ne préparait pas seulement<br /><em>à réussir…</em></h2>
        <div className="vision-turn"><span>mais à comprendre,</span><span>à choisir,</span><span>à construire,</span><strong>et à transmettre.</strong></div>
        <p>Nous croyons aux esprits brillants quand ils deviennent des forces conscientes, utiles et capables de transformer leur environnement.</p>
      </section>

      <section id="dialogue" className="closing" aria-labelledby="closing-title">
        <p className="section-index">05 — Et maintenant</p>
        <h2 id="closing-title">Votre parcours<br /><em>commence quelque part.</em></h2>
        <div className="closing-actions"><ArrowLink href="mailto:contact@edex.bj">Parler à EdEx</ArrowLink><ArrowLink href="#parcours">Explorer mon parcours</ArrowLink></div>
      </section>

      <footer>
        <div className="footer-brand"><a className="wordmark wordmark--footer" href="#top">Ed<span>Ex</span></a><p>L’allié des esprits brillants</p></div>
        <div className="footer-links"><a href="#parcours">Parcours</a><a href="#vision">Vision</a><a href="mailto:contact@edex.bj">Contact</a><a href="#top">LinkedIn ↗</a></div>
        <div className="footer-meta"><span>Cotonou, Bénin</span><span>© 2026 EdEx</span></div>
      </footer>
    </main>
  );
}