import React, { Component } from "react";
// import Form from "../components/form";
import Todos from "../components/todos";
import Footer from "../components/footer";
import "../style/main.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Todos />

        <Footer />
      </div>
    );
  }
}

export default Home;
