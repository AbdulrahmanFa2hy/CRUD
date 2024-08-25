import { Link } from "react-router-dom";
import "./home.css";
import { useSelector } from "react-redux";
import User from "../../components/User";

const Home = () => {
  const users = useSelector((state) => state.user.users);
  return (
    <div className="home">
      <Link to={"/add-user"} className="addUser-btn">
        Add User
      </Link>
      <div className="users">
        {users.length ? (
          users.map((user) => <User {...user} key={user.id} />)
        ) : (
          <div className="empty">no user</div>
        )}
      </div>
    </div>
  );
};

export default Home;
