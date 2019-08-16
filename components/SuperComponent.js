import React from "react";

class SuperComponent extends React.Component {
  constructor(props) {
    super(props);
    this.someVar = "just some variable";
  }
  alertName(title) {
    alert(title);
  }
}

export default SuperComponent;
