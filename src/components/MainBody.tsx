import React from "react";
import Body from "./Body.tsx";
import background from "../assets/caesar.jpg";

const App = () => {
  return (
    <Body background={background}>
      <h1>Colossar is good</h1>
    </Body>
  );
};

export default App;
