import React, { useContext } from "react";

import CardContext from "./CardContext";
import { ContentContext } from "./Context/ContentContext";

export const Contents = (props) => {
  const { state } = useContext(ContentContext);

  const ind = props.data;

  let content = [];
  let editLink = "";

  switch (ind) {
    case "d1":
      editLink = "/China/edit";
      content = state.D1;
      break;

    case "d2":
      content = state.D2;
      editLink = "/France/edit";
      break;
    case "d3":
      editLink = "/India/edit";
      content = state.D3;
      break;

    case "d4":
      content = state.D4;
      editLink = "/Italy/edit";
      break;
    case "d5":
      editLink = "/NewZealand/edit";
      content = state.D5;
      break;
    default:
      break;
  }

  return (
    <>
      <div className="container col-md-6 col-sm-12 ">
        <div className="row d-flex justify-content-around">
          {content.map((ele) => {
            return (
              <CardContext
                title={ele.title}
                description={ele.description}
                image={ele.imageUrl}
                key={ele.id}
                edit={`${editLink}/${ele.id}`}
                id={ele.id}
                ind={ind}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
