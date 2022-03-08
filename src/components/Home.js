import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ContentContext } from "./Context/ContentContext";

const Home = () => {
  const history = useHistory();
  const { state } = useContext(ContentContext);
  // const content = state.D1;

  const carouselCard = [
    {
      addLink: "/China/add",
      content: state.D1,
      title: "China",
      readMore: "/China",
      lang: "你好",
      subTitle: "Hello! (In Chinese)",
    },
    {
      addLink: "/France/add",
      content: state.D2,
      title: "France",
      readMore: "/France",
      lang: "bonjour!",
      subTitle: "Hello! (In Chinese)",
    },
    {
      addLink: "/India/add",
      content: state.D3,
      title: "India",
      readMore: "/India",
      lang: "नमस्कार",
      subTitle: "Hello! (In Hindi)",
    },
    {
      addLink: "/Italy/add",
      content: state.D4,
      title: "Italy",
      readMore: "/Italy",
      lang: "ciao!",
      subTitle: "Hello! (In Italian)",
    },
    {
      addLink: "/NewZealand/add",
      content: state.D5,
      title: "NewZealand",
      readMore: "/NewZealand",
      lang: "Hello!",
      subTitle: "Hello! (In English)",
    },
  ];

  return (
    <>
      <div className="container p-4">
        <div className="row">
          {carouselCard.map(
            ({ addLink, content, readMore, title, lang, subTitle }) => (
              <div
                className="card"
                style={{
                  width: "25rem",
                  margin: "auto",
                  display: "flex",
                  marginBottom: "2rem",
                }}
              >
                <div
                  id={`${title}`}
                  className="carousel slide"
                  // data-bs-ride="carousel"
                  data-bs-interval="false"
                >
                  <div className="carousel-inner">
                    {content.map((ele, i) => (
                      <div
                        key={i}
                        className={
                          i === 0 ? "carousel-item active" : "carousel-item"
                        }
                      >
                        <img
                          className="d-block w-100"
                          src={ele.imageUrl}
                          alt="Second slide"
                          style={{
                            paddingTop: "0.75rem",
                            width: "300px",
                            height: "270px",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#${title}`}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#${title}`}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      color: "crimson",
                      fontFamily: "Pacifico",
                      fontSize: "30px",
                    }}
                  >
                    <strong> {title}</strong>
                  </h5>
                  <button
                    type="button"
                    className="btn btn-secondary card-text badge bg-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title={`${subTitle}`}
                  >
                    {lang}
                  </button>

                  <div>
                    <button
                      type="button"
                      className="btn btn-danger card-text m-2"
                      onClick={() => history.push(`${readMore}`)}
                    >
                      Read More ...
                    </button>
                    <button
                      type="button"
                      className="btn btn-success card-text m-2"
                      onClick={() => history.push(`${addLink}`)}
                    >
                      Add more places
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
