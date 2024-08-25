import "./user.css";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

const User = ({ id, name, email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = () => {
    try {
      navigate(`/update/${id}`);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleRemove = () => {
    dispatch(deleteUser({ id }));
  };
  return (
    <div className="user">
      <div className="data">
        <h3 className="name">{name}</h3>
        <span className="emial">{email}</span>
      </div>
      <div className="icons">
        <MdOutlineEdit onClick={handleEdit} />
        <RiDeleteBinLine onClick={handleRemove} />
      </div>
    </div>
  );
};

export default User;
