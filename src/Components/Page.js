import React, { useState } from 'react';
import port1 from '../assets/port1.png';
import port2 from '../assets/port2.png';
import port3 from '../assets/port3.png';
import port4 from '../assets/port4.png';
import { useNavigate } from 'react-router-dom';
import banerhome from '../assets/bannerhomeedmacora.png';
// import Prueba from '../Components/Prueba';

function Page() {
  // const [state, setState] = useState(false);
  // const toggle = () => {
  //   setState(!state);
  // };
  const navigate = useNavigate();
  const navigateBreakCoffee = () => {
    navigate('/breakcoffee');
  };
  const navigateZulnailsArtist = () => {
    navigate('/zulnailsartist');
  };
  const navigateDakota = () => {
    navigate('/dakota');
  };
  const navigateRandM = () => {
    navigate('/randm');
  };
  const navigateAboutMe = () => {
    navigate('/aboutme');
  };

  return (
    <>
      <div className="page">
        <div className="container">
          <nav className="navbar navbar-expand-lg" id="beginn">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Edicto <span>Manuel.</span>
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
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#portafolio"
                    >
                      Portafolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* ---------------HOme---- */}
      <div className="home" id="home">
        <div className="container">
          <div className="row">
            <div className="col align-self-center">
              {/* <img src={coffee} className="imgCoffee" /> */}
              <h1 className="title inline-block">DESARROLLADOR WEB</h1>
              <h4>Frontend Developer</h4>
              <hr />
              <img src={banerhome} className="banerhome" />
              <div className="button-about">
                <button
                  type="button"
                  href="#"
                  onClick={navigateAboutMe}
                  className="btn btn-outline-dark"
                >
                  MÁS SOBRE MI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------POrtafolio---- */}
      <div className="portafolio" id="portafolio">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>PORTAFOLIO</h1>
            </div>
          </div>
          <div className="row">
            <div className="col card-port">
              <div className="cards">
                <img src={port1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text card-title">Break Coffee</p>
                  <a className="link-to" href="#" onClick={navigateBreakCoffee}>
                    Saber más <ion-icon name="arrow-forward-sharp"></ion-icon>
                  </a>
                  <p className="date-made">sep 16, 2022</p>
                </div>
              </div>
              <div className="cards">
                <img src={port3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text card-title">Zulnails Artist</p>
                  <a
                    className="link-to"
                    href="#"
                    onClick={navigateZulnailsArtist}
                  >
                    Saber más <ion-icon name="arrow-forward-sharp"></ion-icon>
                  </a>
                  <p className="date-made">sep 23, 2022</p>
                </div>
              </div>
              <div className="cards">
                <img src={port2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text card-title">Dakota</p>
                  <a className="link-to" href="#" onClick={navigateDakota}>
                    Saber más <ion-icon name="arrow-forward-sharp"></ion-icon>
                  </a>
                  <p className="date-made">sep 30, 2022</p>
                </div>
              </div>
              <div className="cards">
                <img src={port4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text card-title">Rick and Morty</p>
                  <a className="link-to" href="#" onClick={navigateRandM}>
                    Saber más <ion-icon name="arrow-forward-sharp"></ion-icon>
                  </a>
                  <p className="date-made">oct 15, 2022</p>
                </div>
              </div>

              {/* {state ? <Prueba /> : ''} */}
            </div>
          </div>
        </div>

        {/* <button onClick={toggle} type="button" className="btn btn-outline-dark">
          {state ? 'MENOS' : 'MAS'}
        </button> */}
      </div>
      {/* ---------------COntact---- */}
      <div className="contact" id="contact">
        <div className="container">
          <hr />
          <ul className="wrapper">
            <a
              href="https://github.com/emanuelcortezr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="icon brand">
                <span className="tooltip">Github</span>
                <span>
                  <ion-icon name="logo-github"></ion-icon>
                </span>
              </li>
            </a>

            {/* <li className="icon brand">
              <span className="tooltip">Slack</span>
              <span>
                <ion-icon name="logo-slack"></ion-icon>
              </span>
            </li>
            <li className="icon brand">
              <span className="tooltip">StackOverflow</span>
              <span>
                <ion-icon name="logo-stackoverflow"></ion-icon>
              </span>
            </li> */}
            <a
              href="https://github.com/emanuelcortezr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="icon brand">
                <span className="tooltip">Linkedin</span>
                <span>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </span>
              </li>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=%2B56+9+2255+9905&text=%C2%A1Hola%21+quiero+saber+mas+sobre+tus+servicios."
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="icon brand">
                <span className="tooltip">Whatsapp</span>
                <span>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </span>
              </li>
            </a>
          </ul>
          <hr />
        </div>
      </div>
      {/* ---------------FOoter---- */}

      <div className="footer">
        <button type="button" className="btn btn-outline-dark">
          <a href="#beginn">
            <ion-icon name="arrow-up-sharp"></ion-icon>
          </a>
        </button>
        <p>
          Desarrollado por <span>Edicto Cortez</span>.
        </p>
      </div>
    </>
  );
}
export default Page;
