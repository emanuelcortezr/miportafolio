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
              href="https://github.com/emanuelcortezr/cafeteria.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/cafeteria.git
            </a>
          </span>
        </h4>
        <h4 className="portPagesSubTitle">
          Deploy:{' '}
          <span className="portPagesContent">
            <a
              href="https://emanuelcortezr.github.io/cafeteria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.io/cafeteria/
            </a>
          </span>
        </h4>
        <h4 className="portPagesSubTitle">
          Descripción:{' '}
          <span className="portPagesContent">
            Este proyecto se diseñó para una cafetería que necesitaba llegar a
            la mayor cantidad de público a través del internet exponiendo sus
            productos además de poder venderlos en línea. Cuenta con un diseño
            colorido, agradable a la vista e intuitivo para que el usuario pueda
            llegar fácilmente a donde quiere. La página rápidamente describe
            quienes son como empresa añadiendo un álbum de fotos tomadas de la
            experiencia del usuario en la cafetería. Incluye también con un
            sistema de reserva de mesa. Cuenta con un menú donde se podrá ver el
            detalle de cada producto a su vez se accede al e-commerce donde se
            podrán realizar su pedido. Hacia el final de la página se encuentra
            el espacio de contacto donde se describen las distintas vías de
            comunicación con la empresa sea de forma online a través de las
            redes sociales o presencial facilitando la dirección donde operan
            además los horarios de atención al público.
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
