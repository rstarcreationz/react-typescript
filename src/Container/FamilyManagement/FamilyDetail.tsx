import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { familyServices } from "../../Services/familyServices";
import { Family } from "../../Services/modal";

export const FamilyDetail: React.FC = () => {
  let detailResult = GetDetail();

  return (
    <section className="my-5 mx-3">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div className="card shadow border-none">
              <div className="card-header bg-primary d-flex justify-content-between">
                <h5 className="text-light">Family Detail</h5>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <tr>
                    <td>Family Name</td>
                    <td>Shah</td>
                  </tr>
                  <tr>
                    <td>Family Type</td>
                    <td>Small</td>
                  </tr>
                  <tr>
                    <td>Family Member</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>954985649</td>
                  </tr>
                  <tr>
                    <td>State</td>
                    <td>Madhya Pradesh</td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td>Indore</td>
                  </tr>
                </table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const GetDetail = () => {
  const [FamilyData, setFamilyData] = useState<Family>();

  const params = new URLSearchParams(window.location.search);
  const res = params.get("id");
  useEffect(() => {
    getDetail();
  }, []);
  const getDetail = () => {
    try {
      familyServices.detailFamilyApi(res).then((response: any) => {
        console.log("response......", response);
        setFamilyData(response);
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  return FamilyData;
};
