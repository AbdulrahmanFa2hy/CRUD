import { useNavigate } from "react-router-dom";
import { addUser } from "../../store/userSlice";
import "./addUser.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, email } = Object.fromEntries(formData);
    if (name == "" || email == "") return;
    try {
      dispatch(
        addUser({
          name,
          email,
          id: Math.trunc(Math.random() * 100),
        })
      );
      navigate("/");
      toast.success("Added successfully");
    } catch {
      toast.error("Oops! Error");
    }
  };
  return (
    <form onSubmit={handleAddUser} className="add-form">
      <label htmlFor="name">
        Name
        <input type="text" id="name" placeholder="Name" name="name" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" id="email" placeholder="Email" name="email" />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
