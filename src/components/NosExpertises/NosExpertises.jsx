import React from "react";

import IACestQuoi from "./IACestQuoi.jsx"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img_service_AI from '../images/img_service_AI.png';
import img_service_digital from '../images/img_service_digital.png';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotreExpertise() {
  return (
    <div className="NosServices_Container">
      <div className="NosServicesTitle container">
        <div className="row">
          <div className="col"><h1 id="NosExpertiseTitre">NOS EXPERTISES</h1></div>
        </div>
      </div>

      <div className="ServiceAI container">

        <div className="row">
          <div className="ServiceAI_data col">
            <h5>Embarqué/ IOT / IA:</h5>
            <p className="paragraph_ServiceAI">
              L’IOT (Internet des Objets) est un enjeu majeur de la transformation digitale des
              entreprises et des sociétés humaines dans des domaines aussi diversifiés que la
              domotique, l’aéronautique, l’énergie (Smart Grid), la ville intelligente (Smart City),
              et l’environnement.<br /><br />

              Avec des expertises en Systèmes intelligents et communicants,<br />les technologies
              de communications, la conception des cartes électroniques, le développement des
              plateformes… Super SENSES se charge de réussir ses projets de la phase
              conception Hardware et prototypage jusqu’à <br />la détection des anomalies et la
              visualisation des grandeurs physique. </p></div>

          <div className="col"><img src={img_service_AI} alt="img_service_AI" className="img_service_AI" /></div>
        </div>

      </div>

      <div className="ServiceDigital container">
        <div className="row">
          <div className="col"><img src={img_service_digital} alt="img_service_digital" className="img_service_digital" /></div>

          <div className="ServiceDigital_data col">
            <h5>Le digital:</h5>
            <p className="paragraph_ServiceDigital">

              Le digital combiné avec l’intelligence artificielle est notre cœur de métier. Elle est
              aujourd’hui l’un des leviers majeurs pour atteindre la digitalisation de nos secteurs
              d’activités.<br /><br />

              Avec notre savoir-faire et notre expertise dans les nouvelles technologies établies
              qui nous permet d’identifier et de booster la transformation digitale.<br /><br />
              Notre prestation de service se base sur :<br /><br />
              <ul>
                <i class="bi bi-check2-circle"> Booster la stratégie digitale de l’entreprise.</i><br />
                <i class="bi bi-check2-circle"> Fournir des outils d’aide aux décisions fiables et intelligentes.</i><br />
                <i class="bi bi-check2-circle"> Créer des plateformes interactives intelligentes en temps réelles.</i><br />
                <i class="bi bi-check2-circle"> La mise en œuvre d’applications web et mobile mobilisant toutes les
                  ouvelles approches méthodologiques et technologiques.</i>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div  className="AI_slogan">
        <span > Nous créons de l’intelligence artificielle sur mesure</span>
      </div>
      <IACestQuoi />

    </div>
  );
}

export default NotreExpertise;