import React, { useState } from "react";
import styled from "@emotion/styled";
import Dot from "./Dot";

// ELEMENTS
const Form = styled("form")`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
`;

const HeadingOne = styled("h1")`
  color: blue;
`;

const InputField = styled("input")`
  border: 1px solid red;
`;

const AddComponent = () => {
  const [dots, setDots] = useState([1, 2, 3]);
  return (
    <Form>
      <HeadingOne>Workout-log</HeadingOne>
      <InputField />
      {dots.map((dot) => {
        return (
          <>
            <Dot />
          </>
        );
      })}
    </Form>
  );
};

export default AddComponent;
