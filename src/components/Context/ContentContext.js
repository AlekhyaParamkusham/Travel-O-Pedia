import React, { createContext, useReducer } from "react";
import { data1, data2, data3, data4, data5 } from "../Data/Data";

export const ContentContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      switch (action.ind) {
        case "d1":
          return {
            ...state,
            D1: [...state.D1, action.payload],
          };

        case "d2":
          return {
            ...state,
            D2: [...state.D2, action.payload],
          };
        case "d3":
          return {
            ...state,
            D3: [...state.D3, action.payload],
          };
        case "d4":
          return {
            ...state,
            D4: [...state.D4, action.payload],
          };
        case "d5":
          return {
            ...state,
            D5: [...state.D5, action.payload],
          };
        default:
          break;
      }
      break;
    case "DELETE":
      switch (action.ind) {
        case "d1":
          return {
            ...state,
            D1: state.D1.filter((content) => content.id !== action.payload),
          };
        case "d2":
          return {
            ...state,
            D2: state.D2.filter((content) => content.id !== action.payload),
          };
        case "d3":
          return {
            ...state,
            D3: state.D3.filter((content) => content.id !== action.payload),
          };
        case "d4":
          return {
            ...state,
            D4: state.D4.filter((content) => content.id !== action.payload),
          };
        case "d5":
          return {
            ...state,
            D5: state.D5.filter((content) => content.id !== action.payload),
          };
        default:
          break;
      }
      break;
    case "EDIT":
      const toBeUpdated = action.payload;
      switch (action.ind) {
        case "d1":
          return {
            ...state,
            D1: state.D1.map((con) => {
              if (con.id === toBeUpdated.id) {
                return toBeUpdated;
              }
              return con;
            }),
          };
        case "d2":
          return {
            ...state,
            D2: state.D2.map((con) => {
              if (con.id === toBeUpdated.id) {
                return toBeUpdated;
              }
              return con;
            }),
          };
        case "d3":
          return {
            ...state,
            D3: state.D3.map((con) => {
              if (con.id === toBeUpdated.id) {
                return toBeUpdated;
              }
              return con;
            }),
          };
        case "d4":
          return {
            ...state,
            D4: state.D4.map((con) => {
              if (con.id === toBeUpdated.id) {
                return toBeUpdated;
              }
              return con;
            }),
          };
        case "d5":
          return {
            ...state,
            D5: state.D5.map((con) => {
              if (con.id === toBeUpdated.id) {
                return toBeUpdated;
              }
              return con;
            }),
          };
      }

    default:
      break;
  }
};
export const ContentProvider = (props) => {
  const initialState = {
    D1: data1,
    D2: data2,
    D3: data3,
    D4: data4,
    D5: data5,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function addContent(employee, ind, id) {
    dispatch({
      type: "ADD",
      payload: employee,
      ind: ind,
      id: id,
    });
  }

  function editContent(employee, ind) {
    dispatch({
      type: "EDIT",
      payload: employee,
      ind: ind,
    });
  }

  function deleteContent(id, ind) {
    dispatch({
      type: "DELETE",
      payload: id,
      ind: ind,
    });
  }
  return (
    <ContentContext.Provider
      value={{
        state,
        dispatch,
        deleteContent,
        addContent,
        editContent,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
};
