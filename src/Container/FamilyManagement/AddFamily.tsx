import React, { ChangeEvent, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { familyServices } from "../../Services/familyServices";

interface familyObj {
  family_name: string;
  family_count: null;
  family_contact: null;
  family_type: string;
  family_state: string;
  family_city: string;
}

export const AddFamily = () => {
  const navigate = useNavigate();

  const detailObj: familyObj = {
    family_name: "",
    family_count: null,
    family_contact: null,
    family_type: "",
    family_state: "",
    family_city: "",
  };

  const [familyDetail, setFamilyDetail] = useState<familyObj>(detailObj);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFamilyDetail({ ...familyDetail, [name]: value });
  };

  const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target;
    setFamilyDetail({ ...familyDetail, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // for(let key in familyDetail){
    //   if(familyDetail[key]){

    //   }
    // }
    // if(familyDetail){
    //   alert("All fields are requred")
    // }else{
    //   alert(Object.keys(familyDetail) === null)
    //   alert("something went wrong");

    // }
    if (
      familyDetail.family_name &&
      familyDetail.family_city &&
      familyDetail.family_contact &&
      familyDetail.family_count &&
      familyDetail.family_state &&
      familyDetail.family_type
    ) {
      familyServices.AddFamilyApi(familyDetail).then((response: any) => {
        alert("data added successfully");
        navigate("/family-management");
      });
    } else {
      alert("All fields are requred");
    }
  };

  return (
    <section className="my-5 mx-3">
      <Container>
        <div className="card shadow">
          <div className="card-header d-flex bg-primary">
            <h5 className="text-white">Add Family</h5>
          </div>
          <div className="card-body">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={4} lg={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Family Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="family_name"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4} lg={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Family Member</Form.Label>
                    <Form.Control
                      type="number"
                      name="family_count"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4} lg={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Family Contact</Form.Label>
                    <Form.Control
                      type="number"
                      name="family_contact"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4} lg={4}>
                  <Form.Group>
                    <Form.Label>Family Type</Form.Label>
                    <select
                      className="form-control"
                      name="family_type"
                      onChange={selectChange}
                    >
                      <option selected disabled>
                        --select--
                      </option>
                      <option value="SMALL">SMALL</option>
                      <option value="MEDIUM">MEDIUM</option>
                      <option value="LARGE">LARGE</option>
                    </select>
                  </Form.Group>
                </Col>
                <Col md={4} lg={4}>
                  <Form.Group>
                    <Form.Label>Family State</Form.Label>
                    <Form.Control
                      type="text"
                      name="family_state"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4} lg={4}>
                  <Form.Group>
                    <Form.Label>Family City</Form.Label>
                    <Form.Control
                      type="text"
                      name="family_city"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-flex justify-content-between py-3 bg-white mt-3">
                <Button className="btn btn-primary" type="submit">
                  Submit
                </Button>
                <Button
                  className="btn btn-secondary"
                  onClick={() => navigate("/family-management")}
                >
                  Back
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};
