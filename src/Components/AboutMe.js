import React from 'react';
import coffee from '../assets/CoffeeDoddle.svg';
import Footer from './Footer';
import Navbar from './Navbar';

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className="aboutme" id="home">
        <div className="container">
          <div className="row">
            <div className="col align-self-center">
              <img src={coffee} className="imgCoffee" />
              <h1 className="title inline-block">SOBRE MI</h1>
              <h4>
                "Gracias mamá, gracias papá. Lo que me dieron es perfecto"
              </h4>
              <hr />
              <p>
                ¡Hola! Me llamo Edicto, pero me dicen Manuel. Me dedico al
                diseño de páginas web, hasta ahora enfocándome en entorno de
                JavaScript. Les contaré que soy inmigrante ya de varios años.
                Con el cambio de vida también llego una nueva profesión, ya que
                soy ingeniero mecánico, la cual no ejercí por mucho tiempo al
                querer contemplar nuevos horizontes. Fue cuando reviviendo
                viejas inquietudes decidí explorarlas y me reencontré con la
                programación, entonces me dio la bienvenida a su enorme mundo,
                en el que he encontrado lugares con muchas posibilidades,
                diferentes visiones, descubriendo en sus calles personas
                realmente extraordinarias que hacen que me enamore y me apasione
                más de esta profesión al enseñarme todos los días algo nuevo y
                motivarme cada día a levantarme de la cama. <br />
                <br />
                Poseo habilidades adquiridas durante mis estudios, las prácticas
                en el sector tecnológico y trabajos a tiempo parcial. Además soy
                una persona meticulosa en lo que respecta al diseño. Me gusta un
                ámbito de trabajo estimulante que me permita desarrollar mi
                creatividad, habilidades y ampliar mis conocimientos.
                <br />
                <br />
                Ahora cuéntame, ¿cómo puedo ayudarte?, ¿en qué puedo colaborar?
                Estoy seguro de que con mis conocimientos y tus ideas podremos
                construir una página web moderna y amigable mejorando así su
                imagen personal o la de su empresa.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
