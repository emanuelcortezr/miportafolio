import React from 'react';
import port1 from '../assets/port1.png';
import port2 from '../assets/port2.png';
import port3 from '../assets/port3.png';

const Prueba = () => {
  return (
    <>
      <div className="cards">
        <img src={port2} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text card-title">Dakota</p>
          <a className="link-to">
            Saber mas <ion-icon name="arrow-forward-sharp"></ion-icon>
          </a>
          <p className="date-made">sep 30, 2022</p>
        </div>
      </div>
      <div className="cards">
        <img src={port3} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text card-title">Zulnails Artist</p>
          <a className="link-to">
            Saber mas <ion-icon name="arrow-forward-sharp"></ion-icon>
          </a>
          <p className="date-made">sep 23, 2022</p>
        </div>
      </div>
      <div className="cards">
        <img src={port1} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text card-title">Break Coffee</p>
          <a className="link-to">
            Saber mas <ion-icon name="arrow-forward-sharp"></ion-icon>
          </a>
          <p className="date-made">sep 16, 2022</p>
        </div>
      </div>
    </>
  );
};

export default Prueba;
