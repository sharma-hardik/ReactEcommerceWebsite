import React from "react";
import styled from "styled-components";
// import { Button } from "./styles/Button";
// import { NavLink } from "react-router-dom";
// import { errorImage } from "./assets/images/error.svg";
const Error = () => {
  return (
    <Wrapper>
      {/* <img src={errorImage} alt="error" />
      <NavLink to="/">
        <h1>Error</h1>
        <Button className="btn"> Go Back</Button>
      </NavLink> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export default Error;
