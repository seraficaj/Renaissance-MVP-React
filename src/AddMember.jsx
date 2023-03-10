import axios from "axios";
import { useState } from "react";

const AddMember = (props) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://https://sei-123-p3-backend.onrender.com/projects/${props.project._id}`,
        {
          newMember: formData.newMember,
        }
      )
      .then((res) => {
        props.setUpdated(!props.updated);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Add Teammate
        </label>
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          name="newMember"
          placeholder="add team mate"
        />
      </div>
      <input
        type="submit"
        className="btn btn-primary"
        value="Add Team Member"
      />
    </form>
  );
};

export default AddMember;
