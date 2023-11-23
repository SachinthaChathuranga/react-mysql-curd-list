import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import "./style.css";

const Read = () => {
  const { id } = useParams();
  const [student, setStudent] = React.useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + id)
      .then((res) => {
        console.log(res);
        setStudent(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main">
      <h1>Read page</h1>
      <h2>hello {student.name},</h2>

      <div className="card">
        <h2>{student.name}</h2>
        <div className="content">
          <p>Reg No : {student.id}</p>
          <p>Name : {student.name}</p>
          <p>Email : {student.email}</p>
          <p>Age : {student.age}</p>
        </div>
        <Link to={"/students"} className="btn btn-back">
          Back
        </Link>
        <Link to={`/update/${student.id}`} className="btn btn-update">
          Update
        </Link>
      </div>
    </div>
  );
};

export default Read;
