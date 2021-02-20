import React, { useState } from "react";
import styled from "@emotion/styled";
import Dot from "./Dot";

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

const AddComponent = ({ workout, setWorkout }) => {
  const [dots, setDots] = useState([
    { workout: "Weightlifting" },
    { workout: "Running" },
  ]);

  const handleInput = (event) => {
    setWorkout(event.target.value);
  };

  const submitWorkout = (event) => {
    event.preventDefault();
    if (workout !== "") {
      setDots((prev) => [...prev, { workout: workout }]);
      setWorkout("");
    } else return;
  };

  const removeDots = (dot) => {
    console.log("dot:", dot);
  };

  console.log("dots", dots);
  return (
    <>
      <Form onSubmit={submitWorkout}>
        <HeadingOne>Workout-log</HeadingOne>
        <InputField value={workout} onChange={handleInput} />
        <InputField type="submit" />
      </Form>
      {dots.map((dot, index) => {
        return (
          <>
            <Dot dot={dot} removeDots={removeDots} />
          </>
        );
      })}
    </>
  );
};

export default AddComponent;
