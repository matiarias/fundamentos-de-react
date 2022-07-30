import React from "react";
import { esculturasList } from "../../datos/galeria";

const GaleriaHome = () => {
  console.log(esculturasList);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <h3>Galeria De Arte</h3>
        </div>
      </div>

      <div className="col-12 col-md-6 offset-md-3">
        <button className="btn btn-dark me-3">Anterior</button>
        <button className="btn btn-dark">Siguiente</button>
      </div>
    </div>
  );
};

export default GaleriaHome;
