import React, { Component } from "react";
// import Form from "../components/form";
import Todos from "../components/todos";
import Footer from "../components/footer";
import "../style/main.css";
import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="">
        <h1>Todos</h1>
        <Todos />

        <Footer />
      </div>
    );
  }
}

export default Home;
