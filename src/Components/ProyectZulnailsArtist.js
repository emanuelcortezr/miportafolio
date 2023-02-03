import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const ProyecZulnailsArtist = () => {
  const navigate = useNavigate();
  const navigateBreakCoffee = () => {
    navigate('/breakcoffee');
  };

  const navigateDakota = () => {
    navigate('/dakota');
  };
  return (
    <div className="container">
      <Navbar />
      <h1 className="portPagesTitle">Zulnails Artist</h1>
      <hr />
      <div className="contentPort">
        <h4 className="portPagesSubTitle">
          Proyecto: <span className="portPagesContent">Zulnails Artist.</span>
        </h4>
        <h4 className="portPagesSubTitle">
          Tecnologías empleadas:{' '}
          <span className="portPagesContent">Javascript.</span>
        </h4>
        <h4 className="portPagesSubTitle">
          Frameworks empleados:{' '}
          <span className="portPagesContent">React, Bootstrap.</span>
        </h4>
        <h4 className="portPagesSubTitle">
          Compatible con:{' '}
          <span className="portPagesContent">
            Firefox 100% Google Chrome 100% (caniuse.com)
          </span>
        </h4>
        <h4 className="portPagesSubTitle">
          Repositorio:{' '}
          <span className="portPagesContent">
            <a
              href="https://github.com/emanuelcortezr/web-zulma.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/web-zulma.git
            </a>
          </span>
        </h4>
        <h4 className="portPagesSubTitle">
          Deploy:{' '}
          <span className="portPagesContent">
            <a
              href="https://emanuelcortezr.github.io/web-zulma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.io/web-zulma/
            </a>
          </span>
        </h4>
        <h4 className="portPagesSubTitle">
          Descripción:{' '}
          <span className="portPagesContent">
            Página web diseñada para una manicurista que por medio de internet
            quiere impulsar emprendimiento personal. El usuario podrá llegar
            rápidamente a la información que desea, ya que cuenta con una
            pequeña descripción de sus servicios. Tiene un sistema de agenda
            para los clientes que quieran obtener sus servicios de manera
            online. Tiene una sección portafolio donde la manicurista expone su
            trabajo así las potenciales clientas podrán valorar su trabajo y
            tener la confianza de su servicio. Al pie de página se encuentra la
            sección de contacto donde se describen las distintas vías de
            comunicación personal sea de forma online a través de las redes
            sociales o presencial facilitando la dirección donde opera.
          </span>
        </h4>
      </div>
      <hr />

      <nav aria-label="Page navigation example">
        <ul className="paginations">
          <li className="page-item">
            <a className="page-link text-start" onClick={navigateBreakCoffee}>
              ANTERIOR <br /> <span>Break Coffee</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-end" onClick={navigateDakota}>
              SIGUIENTE <br /> <span>Dakota</span>
            </a>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
};

export default ProyecZulnailsArtist;
