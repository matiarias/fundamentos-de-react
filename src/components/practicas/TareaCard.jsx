import React from "react";

const TareaCard = ({ item, index, borrarTarea, editarTarea }) => {
  return (
    <div>
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <span>{item}</span>

          <div>
            <button
              onClick={() => borrarTarea(index)}
              className="btn btn-secondary btn-sm me-2"
            >
              X
            </button>

            <button onClick={editarTarea} className="btn btn-warning btn-sm">
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TareaCard;
