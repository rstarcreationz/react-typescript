import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Family } from "../../Services/modal";
interface IResult {
  result: Family[];
  handleDelete: (id: any) => void;
}

const FamilyListItem: React.FC<IResult> = ({ result, handleDelete }) => {
  let history = useNavigate();
  return (
    <>
      {result &&
        result.length > 0 &&
        result.map((item: any, key: number) => {
          return (
            <tr key={key}>
              <td>{item?.family_name}</td>
              <td>{item?.family_count}</td>
              <td>{item?.family_type}</td>
              <td>{item?.family_state}</td>
              <td>{item?.family_city}</td>
              <td>
                <Button
                  className="btn btn-info text-white me-1"
                  onClick={() => history(`/family-detail?id=${item.id}`, {state: {userId:  item.id}})}
                >
                  <i className="fa fa-eye"></i>
                </Button>
                <Button
                  className="btn btn-warning text-white me-1"
                  onClick={() => history(`/update-family?id=${item.id}`, item.id)}
                >
                  <i className="fa fa-pencil"></i>
                </Button>
                <Button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  <i className="fa fa-trash"></i>
                </Button>
              </td>
            </tr>
          );
        })}
    </>
  );
};

export default FamilyListItem;
