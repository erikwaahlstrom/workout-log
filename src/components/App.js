import React, { useState } from "react";
import styled from "@emotion/styled";
import AddComponent from "./AddComponent";

const AppWrapper = styled("div")`
  margin: 0 auto;
  width: 480px;
`;

const App = () => {
  const [workout, setWorkout] = useState("");
  return (
    <>
      <AppWrapper>
        <AddComponent workout={workout} setWorkout={setWorkout} />
      </AppWrapper>
    </>
  );
};

export default App;
