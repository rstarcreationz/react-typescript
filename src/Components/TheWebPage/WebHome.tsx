import React from "react";
import WebHeader from "./Header";
import "../../assets/stylesheet/styles.scss";
import styled from "styled-components";

const CardStyle = styled.div`
  background: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px 0px #99999969;
  & .card-header {
    background: transparent;
    border: none;
  }
  & .card-footer {
    background: transparent;
    border: none;
  }
  button {
    background-color: #9636ff;
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    outline: none;
    font-size: 16px;
    text-transform: uppercase;
    border: 2px solid #9636ff;
    transition: 0.2s all ease-in-out;
    &:hover {
      background-color: transparent;
      color: #9636ff;
      border: 2px solid #9636ff;
    }
  }
`;

const Divcomp = styled("div")({
  background: "#000",
  marginTop: "25px",
});

const WebHome: React.FC = () => {
  return (
    <React.Fragment>
      <WebHeader />
      <div className="newCard">
        <h5>Title</h5>
        <p>lorem ipsum dolor sit amet</p>
        <button className="btn btn-default">Read More</button>
      </div>

      <div className="secondcard">
        <h5>Title</h5>
        <p>lorem ipsum dolor sit amet</p>
        <button className="btn btn-default">Read More</button>
      </div>

      <div className="newSection">
        <h5>Title</h5>
        <p>lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <CardStyle>
              <div className="card-header">
                <h5>Lorem Ipsum</h5>
              </div>
              <div className="card-body">
                Hello this is lorem ipsum dolor sit amet consectetur
              </div>
              <div className="card-footer">
                <button type="button">Read More</button>
              </div>
            </CardStyle>
          </div>
          <div className="col-3">
            <CardStyle>
              <div className="card-header">
                <h5>Lorem Ipsum</h5>
              </div>
              <div className="card-body">
                Hello this is lorem ipsum dolor sit amet consectetur
              </div>
              <div className="card-footer">
                <button type="button">Read More</button>
              </div>
            </CardStyle>
          </div>
          <div className="col-3">
            <CardStyle>
              <div className="card-header">
                <h5>Lorem Ipsum</h5>
              </div>
              <div className="card-body">
                Hello this is lorem ipsum dolor sit amet consectetur
              </div>
              <div className="card-footer">
                <button type="button">Read More</button>
              </div>
            </CardStyle>
          </div>
          <div className="col-3">
            <CardStyle>
              <div className="card-header">
                <h5>Lorem Ipsum</h5>
              </div>
              <div className="card-body">
                Hello this is lorem ipsum dolor sit amet consectetur
              </div>
              <div className="card-footer">
                <button type="button">Read More</button>
              </div>
            </CardStyle>
          </div>
        </div>
        <Divcomp>Hello</Divcomp>
      </div>
    </React.Fragment>
  );
};

export default WebHome;
