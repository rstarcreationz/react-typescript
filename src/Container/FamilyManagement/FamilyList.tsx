import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { familyServices } from "../../Services/familyServices";
import  FamilyListItem  from "./FamilyListItem";

export const FamilyList : React.FC = () => {
  const history = useNavigate();
 
  let result =  RenderData()

  const handleDelete = (id: number) => {
    // console.log(id)
    familyServices.deleteFamilyApi(id).then((response: any)=>{
        alert("deleted successfully");
        window.location.reload()
    })
  }

  // console.log("detailResult....", detailResult);

  // function getTime(): void {
  //   return new Date().getTime();
  // }

  // let result = getTime();



  return (
    <section className="my-5 mx-3">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div className="card shadow border-none">
              <div className="card-header bg-primary d-flex justify-content-between">
                <h5 className="text-light">Family Management</h5>
                <Button
                  className="btn btn-light"
                  onClick={() => history("/add-family")}
                >
                  Add Family +
                </Button>
              </div>
              <div className="card-body">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th>Family Name</th>
                      <th>Family Member</th>
                      <th>Family Type</th>
                      <th>State</th>
                      <th>City</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>

                    <FamilyListItem result={result} handleDelete={(id)=>handleDelete(id)} />
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


const RenderData = () => {
  const [familyData, setFamilyData] = useState([])
  useEffect(() => {
    getFamilyList();
  }, []);
  const getFamilyList = () => {
    try {
      familyServices.getFamilyApi().then((response: any) => {
        if (response.status === 200) setFamilyData(response.data);
      });
    } catch (error: any) {
      console.log(error);
    }
  };
  return familyData
}
