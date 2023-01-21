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
          Tecnoligias empleadas:{' '}
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
          Link:{' '}
          <span className="portPagesContent">
            https://github.com/emanuelcortezr/web-zulma.git
          </span>
        </h4>
        <h4 className="portPagesSubTitle">
          Drescripcion:{' '}
          <span className="portPagesContent">
            Pagina web diseñada para una manicurista que por medio de internet
            quiere impulsar emprendimiento personal. El usuario podra llegar
            rapidamente e l informacion que desea, ya que cuenta con una pequeña
            descripcion de sus servicios. Tiene un sistema de agenda para los
            clientes que quieran obtener sus servicios de manera online. Tiene
            una seccion portafolio donde la manicurista expone su trabajo asi
            las potenciales clientas podran valorar su trabajo y tener la
            confianza de su servicio. Al pie de pagina se encuentra la seccion
            de contacto donde se describen las distintas vias de comunicacion
            personal sea de forma online a travez de las redes sociales o
            presencial facilitando la direccion donde opera.
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
