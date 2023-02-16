import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom"

export const Register = () => {
  return (
    <section className="my-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <div className="card shadow border px-4 py-3">
              <div className="text-center">
                <h4 className="fw-bold mb-2 text-primary">Sign Up</h4>
                <small className="text-muted">
                 Please fill your detail to create account !
                </small>
              </div>
              <Form className="mt-3">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput4"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </Button>
                <p className="text-center my-2">
                  <span>- OR -</span>
                </p>
                <p className="text-center my-2">
                  Already Have an Account ?{" "}
                  <Link to="/login" className="text-decoration-none">
                    Login
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
