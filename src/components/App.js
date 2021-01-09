import React from "react";
import styled from "@emotion/styled";
import AddComponent from "./AddComponent";

// ELEMENTS
const AppWrapper = styled("div")`
  margin: 0 auto;
  width: 480px;
`;

const App = () => {
  return (
    <>
      <AppWrapper>
        <AddComponent />
      </AppWrapper>
    </>
  );
};

export default App;
