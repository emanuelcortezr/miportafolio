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
                "Gracias mamá, gracias papá. Lo que me dieron fue perfecto"
              </h4>
              <hr />
              <p>
                ¡Hey, qué tal! ¿Estás listo para crear una página web
                espectacular? Yo puedo ayudarte con eso, pero primero te cuento
                un poco de mí. Me llamo Edicto y me dedico al diseño de páginas
                web con un enfoque en el entorno de JavaScript. Aunque mi
                formación originalmente es en ingeniería mecánica, decidí
                explorar mi pasión por la programación, y ¡no me arrepiento!
                <br />
                <br />
                A lo largo de mi vida, he tenido la oportunidad de viajar y
                vivir en distintos lugares así como de conocer nuevas personas,
                lo que me ha permitido apreciar la belleza de las diferencias
                culturales y disfrutar de la riqueza que cada lugar tiene para
                ofrecer. En el mundo de la programación he encontrado todo eso y
                más. Me apasiona aprender algo nuevo cada día y conocer a
                personas verdaderamente extraordinarias que me inspiran a dar lo
                mejor de mí en cada proyecto.
                <br />
                <br />
                Soy una persona meticulosa en lo que respecta al diseño, en la
                resolución de problemas, de pensamiento crítico y con capacidad
                para trabajar en equipo. Estoy siempre en busca de un ámbito de
                trabajo estimulante que me permita desarrollar mi creatividad y
                habilidades, así como ampliar mis conocimientos.
                <br />
                <br />
                Entonces, ¿en qué puedo ayudarte? ¿Necesitas una página web
                moderna y amigable para mejorar tu imagen personal o la de tu
                empresa? ¡Estoy seguro de que juntos podemos lograrlo! Cuéntame
                tus ideas y trabajemos juntos para hacerlas realidad. ¡Vamos a
                crear algo increíble!
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
