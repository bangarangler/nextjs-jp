import React from "react";
import Header from "../shared/Header.js";

const BaseLayout = props => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default BaseLayout;
