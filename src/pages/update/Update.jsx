import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../store/userSlice";
import "./update.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Update = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const users = useSelector((state) => state.user.users);
  const user = users.filter((user) => user.id === +params.id)[0];

  const [name, setName] = useState(`${user.name}`);
  const [email, setEmail] = useState(`${user.email}`);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (name == "" || email == "") return;
    try {
      dispatch(updateUser({ name, email, id: +params.id }));
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSumbit} className="update-form">
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Update User</button>
    </form>
  );
};

export default Update;
