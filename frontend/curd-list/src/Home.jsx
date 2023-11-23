import { Link } from "react-router-dom";
import './home.css';
const Home = () => {
  return (
    <div className="main">
      <h1>This is Home page</h1>
      <Link to="/students" className="btn btn-list">List</Link>
    </div>
  );
};

export default Home;
