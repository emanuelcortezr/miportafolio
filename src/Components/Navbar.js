import React from 'react';
import facelogo from '../assets/facelogo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };
  const navigatePortafolio = () => {
    navigate('/portafolio');
  };
  const navigateContact = () => {
    navigate('/contact');
  };
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
                  onClick={navigatePortafolio}
                  href="#portafolio"
                >
                  Portafolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={navigateContact}
                  href="#contact"
                >
                  Contacto
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
