import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const ProyectRandM = () => {
  const navigate = useNavigate();

  const navigateZulnailsArtist = () => {
    navigate('/dakota');
  };
  return (
    <div className="container">
      <Navbar />
      <h1 className="portPagesTitle">Rick and Morty</h1>
      <hr />
      <div className="contentPort">
        <h4 className="portPagesSubTitle">
          Proyecto: <span className="portPagesContent">Rick and Morty.</span>
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
            https://github.com/emanuelcortezr/petpage.git
          </span>
        </h4>
        <h4 className="portPagesSubTitle">
          Drescripcion:{' '}
          <span className="portPagesContent">
            Diseñado para una tienda de mascotas y veterinaria. Cuenta con un
            diseño sencillo, con dos colores principales, agradable a la vista.
            Incluye tambien con un sistema de reserva de hora para la consulta
            de las mascotas. llegando al final de la pagina encuentramos el
            feedback de los usuarios, donde valoran el servicio prestado.
            Tambien se encuentra la seccion de contacto donde se describen las
            distintas vias de comunicacion con la veterinaria sea de forma
            online a travez de las redes sociales o presencial facilitando la
            direccion donde operan ademas los horarios de atencion al publico.
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
              ANTERIOR <br /> <span>Dakota</span>
            </a>
          </li>
          <li className="page-item"></li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
};

export default ProyectRandM;
