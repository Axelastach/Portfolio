import React, { useState } from 'react';
import './About.css';
import ME from '../../assets/IMG_20230531_193142-transformed.png';


const About = () => {
  const [showEnglishTranslation, setShowEnglishTranslation] = useState(false);

  const handleTranslationClick = () => {
    setShowEnglishTranslation(!showEnglishTranslation);
  };

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
          <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              
                <div onClick={handleTranslationClick} className='btn-trad '>
                  {showEnglishTranslation ? 'Afficher la traduction en français ' : 'Show English Translation '}
                </div>
              {showEnglishTranslation ? (
                <p>
                    I transitioned from a career in the restaurant industry to the field of technology.<br/><br/> After obtaining a Recognition of Quality as a Disabled Worker (RQTH), I attended the Wild Code School in Biarritz to acquire skills in this rapidly growing field.<br/><br/> I am passionate about innovation and problem-solving. I enjoy designing digital solutions that enhance people's lives. Apart from my education, I have a keen interest in exploring new technologies, continuous learning, and analyzing market trends.<br/> <br/>I am excited about taking on new challenges and open to collaboration and continuous learning opportunities. Feel free to contact me if you would like to learn more about my journey or if you think we could work together.
                </p>
              ) : (
                <p>
                  Je suis passé d'une carrière dans la restauration à une reconversion dans le domaine de la technologie.<br/><br/> Après avoir obtenu une Reconnaissance de la Qualité de Travailleur Handicapé (RQTH), j'ai suivi une formation à la Wild Code School de Biarritz pour acquérir des compétences dans ce domaine en pleine expansion.<br/><br/> Je suis passionné par l'innovation et la résolution de problèmes. J'apprécie la conception de solutions numériques qui améliorent la vie des gens.<br/><br/> En dehors de ma formation, j'ai également un vif intérêt pour l'exploration de nouvelles technologies, l'apprentissage continu et l'analyse des tendances du marché. Je suis enthousiaste à l'idée de relever de nouveaux défis et je suis ouvert aux opportunités de collaboration et d'apprentissage continu.<br/><br/> N'hésitez pas à me contacter si vous souhaitez en savoir plus sur mon parcours ou si vous pensez que nous pourrions travailler ensemble.
                </p>
              )}
                <a href="#contact" className='btn btn-primary lets'>Let's Talk</a>
            </article>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
