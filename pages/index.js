import React, { useEffect } from "react";
import Todos from "../components/todos";
import Footer from "../components/footer";
import "../style/main.css";
import "./style.css";

const Home = () => {
  return (
    <div className="">
      <h1>Todos</h1>
      <Todos />

      <Footer />
    </div>
  );
};

export default Home;
