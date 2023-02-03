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
              href="https://github.com/emanuelcortezr/api-randm.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/api-randm.git
            </a>
          </span>
        </h4>
        <h4 className="portPagesSubTitle">
          Deploy:{' '}
          <span className="portPagesContent">
            <a
              href="https://emanuelcortezr.github.io/api-randm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.io/api-randm/
            </a>
          </span>
        </h4>
        <h4 className="portPagesSubTitle">
          Descripción:{' '}
          <span className="portPagesContent">
            Es una aplicación diseñada con fines prácticos. Los datos de la API
            Rick and Morty. Tiene un diseño sencillo y bonito. La aplicación
            muestra los personajes de la serie animada e información relevante,
            también cuenta con la opción de marcar como favorito cualquier
            personaje. Tiene un filtro de búsqueda por si se quiere un personaje
            específico. Otra sección lista, episodios de la serie con
            información relevante acerca de estos, también tiene un filtro de
            búsqueda para encontrar un episodio. También se encuentra la sección
            de contacto donde se describen las distintas vías de comunicación
            personales.
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
