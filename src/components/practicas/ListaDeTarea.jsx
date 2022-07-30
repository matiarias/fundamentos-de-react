import React from "react";
import { useState, useEffect } from "react";
import TareaCard from "./TareaCard";
import TareaForm from "./TareaForm";

const Practica = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [validacion, setValidacion] = useState(true);

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setTask([inputValue, ...task]);
      // localStorage.setItem("tareas", JSON.stringify(task));
      setInputValue("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };

  const borrarTarea = (indice) => {
    const tareasPendientes = [...task];
    tareasPendientes.splice(indice, 1);
    setTask(tareasPendientes);
  };

  const editarTarea = () => {};

  const borrarTodo = () => {
    setTask([]);
  };

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
              <div className="alert alert-warning mt-3" role="alert">
                Escribe tu tarea por favor!
              </div>
            )}
            <p className="mt-2">Tareas Pendientes: {task.length}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 mt-3">
            {task.map((item, index) => (
              <TareaCard
                key={index}
                item={item}
                index={index}
                borrarTarea={borrarTarea}
                editarTarea={editarTarea}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Practica;
