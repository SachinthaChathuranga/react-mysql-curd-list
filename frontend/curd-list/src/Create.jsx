import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./create.css";
import "./style.css";

const Create = () => {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    age: null,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/students", values)
      .then((res) => {
        console.log(res);
        navigate("/students");
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div className="main">
      <h1>Add New students</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name="name"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        <label htmlFor="">Email: </label>
        <input
          type="email"
          name="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />

        <label htmlFor="">Age: </label>
        <input
          type="number"
          name="age"
          onChange={(e) => setValues({ ...values, age: e.target.value })}
        />

        <button type="submit" className="btn btn-add">
          Add
        </button>
      </form>
    </div>
  );
};

export default Create;
