import React from 'react';
import facelogo from '../assets/facelogo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };

  const navigateBreakCoffee = () => {
    navigate('/breakcoffee');
  };
  // const navigatePortafolio = () => {
  //   navigate('/portafolio');
  // };

  return (
    <div className="container" id="beginn">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={navigateHome}>
            Edicto <span>Manuel.</span>
            <img src={facelogo} className="facelogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" onClick={navigateHome} href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={navigateBreakCoffee}
                  href="#portafolio"
                >
                  Portafolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://api.whatsapp.com/send?phone=%2B56+9+2255+9905&text=%C2%A1Hola%21+quiero+saber+mas+sobre+tus+servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="mailto:emanuelcortezr@gmail.com?subject=%C2%A1Hola!%20quiero%20saber%20mas%20sobre%20tus%20servicios.&body=Hola%2C%20te%20contacto%20desde%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20que%20convers%C3%A1ramos%20para%20saber%20m%C3%A1s%20sobre%20tus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="mail-outline"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
