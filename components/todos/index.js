import React, { useState, useEffect, useRef } from "react";
import { todosMachine } from "../../config/todosMachine";
import { updatetodoList } from "../../config/actions";
import { useMachine } from "@xstate/react";
import Todo from "../todo";
import "./style.css";

const Todos = () => {
  const machine = useMachine(todosMachine);
  const [state, transition, interpreter] = machine;

  useEffect(() => {
    // interpreter
    //   .onTransition((state) => console.log("Todos TRANSITION", state))
    //   .onEvent((event) => console.log("Todos EVENT", event));

    transition("INIT", {});
  }, [interpreter, transition]);

  return (
    <div className="todos">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="Task here"
          className="todo"
          onChange={(e) => {}}
        ></input>
        <label onClick={() => {}}>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="chevron-down w-6 h-6 selectAll"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </label>
      </form>

      {state.matches("todo") && <Todo machine={machine} />}

      <div className="buttons">
        <div className="counted">
          <label> item left</label>
        </div>
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Complete</button>

        <div className="allCompleted">
          <button type="button">Clear completed</button>
        </div>
      </div>
    </div>
  );
};

export default Todos;
