import React, { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ContentContext } from "./Context/ContentContext";

const EditForm = (props) => {
  const { state, editContent } = useContext(ContentContext);
  const history = useHistory();
  const { id } = useParams();
  const dataVal = props.data;

  let content = [];
  let editLink = "";

  switch (dataVal) {
    case "d1":
      editLink = "/China";
      content = state.D1;
      break;

    case "d2":
      content = state.D2;
      editLink = "/France";
      break;
    case "d3":
      editLink = "/India";
      content = state.D3;
      break;

    case "d4":
      content = state.D4;
      editLink = "/Italy";
      break;
    case "d5":
      editLink = "/NewZealand";
      content = state.D5;
      break;
    default:
      break;
  }

  const [selected, setSelected] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });
  useEffect(() => {
    const contentId = id;
    const selected = content.find((con) => con.id === parseInt(contentId));
    setSelected(selected);
  }, [id, content]);

  const handleChange = (e) => {
    setSelected((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setSelected({ ...selected, [e.target.name]: e.target.value });
  };
  const editClickContent = (e) => {
    e.preventDefault();

    editContent(selected, dataVal);
    history.push(`${editLink}`);
  };
  return (
    <>
      <div className="container col-lg-4 col-md-6 col-sm-12">
        <form className="m-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Title</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={selected.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Description</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={selected.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Image</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              name="imageUrl"
              value={selected.imageUrl}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            onClick={editClickContent}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default EditForm;
