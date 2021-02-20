import React from "react";
import styled from "@emotion/styled";

const DotWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

const DotDiv = styled("div")`
  background-color: red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 5px 0px;
`;

const Title = styled("p")`
  font-size: 12px;
  padding-left: 10px;
`;

const Dot = ({ dot, removeDots }) => {
  const { workout } = dot;
  return (
    <>
      <DotWrapper onClick={() => removeDots(dot)}>
        <DotDiv />
        <Title>{workout}</Title>
      </DotWrapper>
    </>
  );
};

export default Dot;
