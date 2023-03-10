import React, { useState, useEffect } from "react";
import axios from "axios";
// Bootstrap Component
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// My Components
import ProjectCard from "./ProjectCard";
import NewProjectForm from "./NewProjectForm";

const App = () => {
  const [projects, setProjects] = useState(null);
  const [updated, setUpdated] = useState(false);

  const getProjects = () => {
    axios
      .get(`http://https://sei-123-p3-backend.onrender.com/projects`)
      .then((res) => {
        setProjects(res.data);
      });
  };

  // load in all Projects from API on Page Load
  useEffect(() => {
    getProjects();
  }, []);

  // reload App.jsx when updated are made to DB
  useEffect(() => {
    getProjects();
  }, [updated]);

  return projects ? (
    <Container>
      <h1>React Project Tag Team</h1>
      <Row>
        {projects.map((project, idx) => (
          <ProjectCard
            project={project}
            key={idx}
            setUpdated={setUpdated}
            updated={updated}
          />
        ))}
      </Row>
      <NewProjectForm setUpdated={setUpdated} updated={updated} />
    </Container>
  ) : (
    <h1>Nothing Loaded Yet...</h1>
  );
};

export default App;
