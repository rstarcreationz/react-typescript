import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container>
        <Row>
            <Col md={12} lg={12} >
                <p className="text-muted text-center">copyright. All rights reserved</p>
            </Col>
        </Row>
    </Container>
  );
}

export default Footer;
