import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate("/family-management");
  };

  return (
    <section className="my-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <div className="card shadow border px-4 py-3">
              <div className="text-center">
                <h4 className="fw-bold mb-2 text-primary">Sign In</h4>
                <small className="text-muted">
                  Please enter your detail to get back your account !
                </small>
              </div>
              <Form className="mt-3">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Button
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
                <p className="text-center my-2">
                  <span>- OR -</span>
                </p>
                <p className="text-center my-2">
                  Don't Have an Account ?{" "}
                  <Link to="/register" className="text-decoration-none">
                    Sign Up
                  </Link>{" "}
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
