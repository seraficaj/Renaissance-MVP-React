import axios from "axios";
import { Button, ButtonGroup, ListGroupItem } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

import AddMember from "./AddMember";
import UpdateProjectForm from "./UpdateProjectForm";

const ProjectCard = (props) => {
  const handleDelete = (project) => {
    axios
      .delete(
        `http://https://sei-123-p3-backend.onrender.com/projects/${project._id}`
      )
      .then(() => {
        props.setUpdated(!props.updated);
      })
      .catch((err) => console.log(err));
  };

  const handleComplete = (project) => {
    axios
      .put(
        `http://https://sei-123-p3-backend.onrender.com/projects/${project._id}`,
        {
          complete: !props.project.complete,
        }
      )
      .then(() => {
        props.setUpdated(!props.updated);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Col sm={6} md={4}>
      <Card>
        <Card.Body>
          <Card.Title>{props.project.name}</Card.Title>
          <Card.Title>
            Complete? {props.project.complete ? "Complete" : "In Progress"}
          </Card.Title>
          <Card.Text>{props.project.description}</Card.Text>
          <Card.Text>Team Members</Card.Text>
          <ListGroup>
            {props.project.teamMembers.map((person) => (
              <ListGroupItem>{person}</ListGroupItem>
            ))}
          </ListGroup>
          <AddMember
            project={props.project}
            setUpdated={props.setUpdated}
            updated={props.updated}
          />
          <UpdateProjectForm
            project={props.project}
            setUpdated={props.setUpdated}
            updated={props.updated}
          />
          <ButtonGroup>
            <Button
              variant="secondary"
              onClick={() => handleComplete(props.project)}
            >
              Complete? {props.project.complete ? "No" : "Yes"}
            </Button>
            <Button
              onClick={() => handleDelete(props.project)}
              variant="danger"
            >
              Delete
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
