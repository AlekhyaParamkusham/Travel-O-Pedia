import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ContentContext } from "./Context/ContentContext";
const AddForm = (props) => {
  const { state, addContent } = useContext(ContentContext);
  const history = useHistory();
  const dataVal = props.data;

  let content = [];
  let addLink = "";

  switch (dataVal) {
    case "d1":
      addLink = "/China";
      content = state.D1;
      break;

    case "d2":
      content = state.D2;
      addLink = "/France";
      break;
    case "d3":
      addLink = "/India";
      content = state.D3;
      break;

    case "d4":
      content = state.D4;
      addLink = "/Italy";
      break;
    case "d5":
      addLink = "/NewZealand";
      content = state.D5;
      break;
    default:
      break;
  }
  const [formInput, setFormInput] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const addClickContent = (e) => {
    e.preventDefault();

    // const { title, description, imageUrl } = formInput;
    const newId = content.length + 10;

    addContent(formInput, dataVal, newId);
    clearInputs();
    history.push(`${addLink}`);
  };
  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const clearInputs = () => {
    setFormInput({ title: "", description: "", imageUrl: "" });
  };
  return (
    <>
      <div className="container col-lg-4 col-md-6 col-sm-12">
        <form className="m-4">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              <strong>Title</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formInput.title}
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
              value={formInput.description}
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
              value={formInput.imageUrl}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            onClick={addClickContent}
            className="btn btn-success"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddForm;
