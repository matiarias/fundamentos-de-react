import React from "react";

const TareaForm = ({ handleSubmit, handleChange, inputValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          maxLength="25"
          type="text"
          className="form-control"
          placeholder="Escribe la tarea"
          value={inputValue}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </>
  );
};

export default TareaForm;
