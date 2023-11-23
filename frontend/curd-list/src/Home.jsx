import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="main">
      <h1>This is Home page</h1>
      <Link to="/students">List</Link>
    </div>
  );
};

export default Home;
