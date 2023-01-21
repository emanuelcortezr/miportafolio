import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
