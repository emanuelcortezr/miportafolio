import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const ProyectDakota = () => {
  const navigate = useNavigate();

  const navigateZulnailsArtist = () => {
    navigate('/zulnailsartist');
  };
  const navigateRandM = () => {
    navigate('/randm');
  };
  return (
    <div className="container">
      <Navbar />
      <h1 className="portPagesTitle">Dakota</h1>
      <hr />
      <div className="contentPort">
        <h4 className="portPagesSubTitle">
          Proyecto: <span className="portPagesContent">Dakota.</span>
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
              href="https://github.com/emanuelcortezr/petpage.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/petpage.git
            </a>
          </span>
        </h4>
        <h4 className="portPagesSubTitle">
          Deploy:{' '}
          <span className="portPagesContent">
            <a
              href="https://emanuelcortezr.github.io/petpage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.io/petpage/
            </a>
          </span>
        </h4>
        <h4 className="portPagesSubTitle">
          Descripción:{' '}
          <span className="portPagesContent">
            Diseñado para una tienda de mascotas y veterinaria. Cuenta con un
            diseño sencillo, con dos colores principales, agradable a la vista.
            Incluye también un sistema de reserva de hora para la consulta de
            las mascotas. Llegando al final de la página encontramos el feedback
            de los usuarios, donde valoran el servicio prestado. También se
            encuentra la sección de contacto donde se describen las distintas
            vías de comunicación con la veterinaria sea de forma online a través
            de las redes sociales o presencial facilitando la dirección donde
            operan además los horarios de atención al público.
          </span>
        </h4>
      </div>
      <hr />

      <nav aria-label="Page navigation example">
        <ul className="paginations">
          <li className="page-item">
            <a
              className="page-link text-start"
              onClick={navigateZulnailsArtist}
            >
              ANTERIOR <br /> <span>Zulnails Artist</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-end" onClick={navigateRandM}>
              SIGUIENTE <br /> <span>Rick and Morty</span>
            </a>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
};

export default ProyectDakota;
