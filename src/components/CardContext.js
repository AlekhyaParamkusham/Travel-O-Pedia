import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContentContext } from "./Context/ContentContext";

const CardContext = (props) => {
  const { deleteContent } = useContext(ContentContext);
  const ind = props.ind;

  const deleteClickContent = (id) => {
    deleteContent(id, ind);
  };

  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div
            className="card"
            style={{
              width: "50rem",
              margin: "auto",
              display: "flex",
              marginBottom: "2rem",
            }}
          >
            <img
              className="card-img-top"
              src={props.image}
              alt="Card cap"
              style={{ paddingTop: "0.75rem" }}
            />
            <div className="card-body">
              <h4 className="card-title" style={{ color: "crimson" }}>
                {props.title}
              </h4>
              <p className="card-text">{props.description}</p>
            </div>
            <div>
              <Link to={`${props.edit}`} className="btn btn-warning m-2">
                Edit
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => deleteClickContent(props.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContext;
