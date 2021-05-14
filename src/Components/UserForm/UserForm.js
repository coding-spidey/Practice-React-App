import { useState } from "react";
import { Button, Card, Form, Container } from "react-bootstrap";

import ErrorModal from "../ErrorModal/ErrorModal";
import "./UserForm.css";

const UserForm = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const SubmitFormHandler = (event) => {
    event.preventDefault();
    if (
      event.target[0].value.length === 0 &&
      event.target[1].value.length === 0
    ) {
      setErrorMessage("Please Enter Valid Username and Age");
      return;
    }
    if (event.target[0].value.length === 0) {
      setErrorMessage("Please Enter Valid Username");
      return;
    }
    if (event.target[1].value.length === 0) {
      setErrorMessage("Please Enter Valid Age");
      return;
    }
    if (isNaN(event.target[1].value)) {
      setErrorMessage("Please Enter Valid Age (Number only)");
      return;
    }
    if (Number(event.target[1].value) < 0) {
      setErrorMessage("Age Should be greater than zero");
      return;
    } else {
      setErrorMessage(null);
      const uName = event.target[0].value;
      const uAge = event.target[1].value;
      event.target[0].value = "";
      event.target[1].value = "";
      props.onAddUser(uName, uAge);
      // console.log("check in userform");
    }
    // console.log(user);
  };
  const errorHandler = () => {
    setErrorMessage(null);
  };
  return (
    <>
      {errorMessage && (
        <ErrorModal message={errorMessage} onConfirm={errorHandler} />
      )}
      <Card className="my-3">
        <Container className="my-2">
          <form onSubmit={SubmitFormHandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" placeholder="Enter Age" />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
              Add user
            </Button>
          </form>
        </Container>
      </Card>
    </>
  );
};
export default UserForm;
