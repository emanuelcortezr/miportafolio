import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const ProyecBreakCoffee = () => {
  const navigate = useNavigate();

  const navigateZulnailsArtist = () => {
    navigate('/zulnailsartist');
  };
  return (
    <div className="container">
      <Navbar />
      <h1 className="portPagesTitle">Break Coffee</h1>
      <hr />
      <div className="contentPort">
        <h4 className="portPagesSubTitle">
          Proyecto: <span className="portPagesContent">Break Coffee.</span>
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
            https://github.com/emanuelcortezr/cafeteria.git
          </span>
        </h4>
        <h4 className="portPagesSubTitle">
          Drescripcion:{' '}
          <span className="portPagesContent">
            Este proyecto se diseño para una cafeteria que necesitaba llegar a
            la mayor cantidad de publico a travez del internet exponiendo sus
            productos ademas de poder venderlos en linea. Cuenta con un diseño
            colorido, agradble al la vista e intuitivo para que el usuario pueda
            llegar facilmente a donde quiere. La pagina rapidamente describe
            quienes son como empresa adicionado un albun de fotos tomadas de la
            experiencia del usuario en la cafeteria. Incluye tambien con un
            sistema de reserva de mesa. cuenta con un menu donde se podra ver el
            detalle de cada producto a su vez se accede al e-commerc donde se
            podran realizar su pedido. Hacia el final de la pagina se encuentra
            el espacio de contacto donde se describen las distintas vias de
            comunicacion con la empresa sea de forma online a travez de las
            redes sociales o presencial facilitando la direccion donde operan
            ademas los horarios de atencion al publico.
          </span>
        </h4>
      </div>
      <hr />
      <nav aria-label="Page navigation example">
        <ul className="paginations">
          <li className="page-item"></li>
          <li className="page-item">
            <a className="page-link text-end" onClick={navigateZulnailsArtist}>
              SIGUIENTE <br /> <span>Zulnails Artist</span>
            </a>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
};

export default ProyecBreakCoffee;
