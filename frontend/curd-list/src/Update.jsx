import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "./create.css";
import "./style.css";

const Update = () => {
  const { id } = useParams();
  const [student, setStudent] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + id)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          name: res.data[0].name,
          email: res.data[0].email,
          age: res.data[0].age,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    age: '',
  });

  const navigate = useNavigate();

  //again update function
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8081/update/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/students");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <h1>Update students</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        <label htmlFor="">Email: </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />

        <label htmlFor="">Age: </label>
        <input
          type="number"
          name="age"
          value={values.age}
          onChange={(e) => setValues({ ...values, age: e.target.value })}
        />

        <button type="submit" className="btn btn-update">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
