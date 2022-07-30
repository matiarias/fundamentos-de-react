import React, { useState } from "react";
import TareaCard from "./TareaCard";
import TareaForm from "./TareaForm";

const Practica = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [validacion, setValidacion] = useState(true);
  const [modoEdit, setModoEdit] = useState(false);
  const [editInput, setEditInput] = useState("");

  // ----------------------- Función para obtener el value del input principal -------------------

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  // ----------------- Función submit del formulario que agrega las tareas ------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setTask([inputValue, ...task]);
      setInputValue("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };

  // ---------------------- Función Borrar tarea y Borrar todas las tareas --------------------------

  const borrarTarea = (indice) => {
    const tareasPendientes = [...task];
    tareasPendientes.splice(indice, 1);
    setTask(tareasPendientes);
  };

  const borrarTodo = () => {
    setTask([]);
  };

  // ------------------------------ Función editar tareas ---------------------------------------

  const handleChangeEdit = ({ target }) => {
    setEditInput(target.value);
    console.log(target.value);
  };

  const editarTareaBtn = () => {
    setModoEdit(true);
  };

  const submitEdit = (e) => {
    e.preventDefault();
    setEditInput("");
    setModoEdit(false);
    console.log("submit edit funcionando");
  };

  // --------------------------------------------------------------------------------------------

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div
            onClick={borrarTodo}
            className="col-12 col-md-6 offset-md-3 mb-1 d-flex justify-content-between align-items-center"
          >
            <h3 className="text-center">Lista de tareas</h3>
            <button className="btn btn-dark btn-sm">Borrar Todo</button>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12 col-md-6 offset-md-3">
            <div className="d-flex">
              <div className="w-100">
                <TareaForm
                  handleSubmit={handleSubmit}
                  inputValue={inputValue}
                  handleChange={handleChange}
                />
              </div>

              <div className="ms-3">
                <button onClick={handleSubmit} className="btn btn-secondary">
                  Agregar
                </button>
              </div>
            </div>

            {!validacion && (
              <div className="alert alert-danger mt-3" role="alert">
                Escribe tu tarea por favor!
              </div>
            )}
            <p className="mt-2">Tareas Pendientes: {task.length}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 mt-3">
            {!modoEdit ? (
              task.map((item, index) => (
                <TareaCard
                  key={index}
                  item={item}
                  index={index}
                  borrarTarea={borrarTarea}
                  editarTareaBtn={editarTareaBtn}
                />
              ))
            ) : (
              <div className="card">
                <div className="card-body">
                  <h4 className="text-center">Edita tu tarea</h4>
                  <div className="d-flex">
                    <div className="w-100 me-3">
                      <form onSubmit={submitEdit}>
                        <input
                          type="text"
                          maxLength="25"
                          className="form-control"
                          value={editInput}
                          onChange={handleChangeEdit}
                        />
                      </form>
                    </div>

                    <button
                      onClick={submitEdit}
                      className="btn - btn-primary btn-sm"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Practica;
