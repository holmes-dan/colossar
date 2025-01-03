import React from "react";

const BodyComponent = ({ background, children }) => {
  const style = {
    backgroundImage: `url(${background})`,
    backgroundColor: background.startsWith("url") ? "transparent" : background,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    color: "#fff",
  };

  return <div style={style}>{children}</div>;
};

export default BodyComponent;
