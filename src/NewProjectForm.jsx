import axios from "axios";
import { useState } from "react";

import { Col } from "react-bootstrap";

const NewProjectForm = (props) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/projects", {
        description: formData.description,
        name: formData.name,
      })
      .then((res) => {
        props.setUpdated(!props.updated);
      })
      .catch((err) => console.log(err));
    setFormData({});
  };

  return (
    <Col sm={12} md={{ span: 4, offset: 4 }}>
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Project Name
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="name"
            placeholder={
              formData.name ? formData.description : "Enter Project Name"
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            Project Description
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="description"
            placeholder={
              formData.description
                ? formData.description
                : "Enter Project Description"
            }
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </Col>
  );
};

export default NewProjectForm;
