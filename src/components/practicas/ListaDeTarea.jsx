import React from "react";
import { useState } from "react";
import TareaCard from "./TareaCard";
import TareaForm from "./TareaForm";

const Practica = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      alert("por favor escribe una tarea");
    } else {
      setTask([...task, inputValue]);
      setInputValue("");
      // localStorage.setItem("tareas", JSON.stringify(task));
    }
  };

  const borrarTarea = (indice) => {
    const tareasPendientes = [...task];
    tareasPendientes.splice(indice, 1);
    setTask(tareasPendientes);
  };

  const editarTarea = () => {};

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-12 col-md-6 offset-md-3 mb-1">
            <h3 className="text-center">Lista de tareas</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3">
            <TareaForm
              handleSubmit={handleSubmit}
              inputValue={inputValue}
              handleChange={handleChange}
            />

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
