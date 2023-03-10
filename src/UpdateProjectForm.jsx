import { useState } from "react";
import axios from "axios";

const UpdateProjectForm = (props) => {
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
          description: formData.description,
        }
      )
      .then((res) => {
        props.setUpdated(!props.updated);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Update Project Description
        </label>
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          name="description"
          placeholder={props.project.description}
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Update" />
    </form>
  );
};

export default UpdateProjectForm;
