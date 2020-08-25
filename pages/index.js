import React, { useState, useEffect } from "react";
import Todos from "../components/todos";
import Footer from "../components/footer";
import "../style/main.css";
import "./style.css";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState();

  // const getTodos = () => {
  //   const data = axios
  //     .get(`/api/todos`)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="">
      <h1>Todos</h1>
      <Todos />

      <Footer />
    </div>
  );
};

export default Home;
