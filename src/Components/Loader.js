import React from "react";
import { Container } from "react-bootstrap";
import Load from "../images/dodge.png";

const Loader = () => {
  return (
    <Container>
      <div className="loader">
        <div className="loader__container">
          <img src={Load} alt="Loader" with="200px" height="200px"/>
          <h6>Trwa pobieranie samochodów ...</h6>
        </div>
      </div>
    </Container>
  );
};

export default Loader;
