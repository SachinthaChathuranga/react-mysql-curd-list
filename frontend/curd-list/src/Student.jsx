import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";

const Student = () => {
  const [student, setStudent] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8081/students")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8081/delete/" + id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="outline">
      <div className="inlineBox">
        <Link to="/create">
          <button className="btn btn-add">Add +</button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
                <td>
                  <Link to={`/read/${data.id}`} className="btn btn-read">
                    Read
                  </Link>
                  <Link to={`/update/${data.id}`} className="btn btn-update">
                    Update
                  </Link>
                  <Link
                    onClick={() => handleDelete(data.id)}
                    className="btn btn-delete"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;

// export default function Student() {
//   const [student, setStudent] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:8081/")
//       .then((res) => setStudent(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="outline">
//       <div className="inlineBox">
//         <button className="btn btn-add">Add +</button>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Age</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {student.map((data, i) => (
//               <tr key={i}>
//                 <td>{data.name}</td>
//                 <td>{data.email}</td>
//                 <td>{data.age}</td>
//                 <td>
//                   <button>Update</button>
//                 </td>
//                 <td>
//                   <button>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
