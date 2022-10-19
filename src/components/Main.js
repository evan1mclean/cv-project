import React, { Component } from "react";
import "../styles/Main.css";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <Form />
        <Preview />
      </div>
    );
  }
}

export default Main;
