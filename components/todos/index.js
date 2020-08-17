import React from "react";
import {
  todoMachine,
  useMachine,
  updatetodo,
  countedItens,
} from "../../config/machine";
import Todo from "../todo";
import "./style.css";

const Todos = () => {
  const [machine, send] = useMachine(todoMachine);

  console.log("State = ", machine.value);

  return (
    <div className="todos">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formulary = {
            type: "ADD",
            todos: {
              formulary: { task: machine.context.todos.formulary.task },
              todo: {
                id: Math.floor(Math.random() * 1000 + 1),
                value: machine.context.todos.formulary.task,
                complete: false,
              },
            },
          };

          send(formulary);
        }}
      >
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="Task here"
          className="todo"
          value={machine.context.todos.formulary.task}
          onChange={(e) => {
            send({
              type: "CHANGE",
              todos: {
                formulary: { task: e.target.value },
              },
            });
          }}
        ></input>
        <label onClick={() => send({ type: "SELECT_ALL" })}>
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

      <Todo machine={machine} send={send} />

      <div className="buttons">
        <div className="counted">
          <label>{countedItens(machine)} item left</label>
        </div>
        <button type="button" onClick={() => send({ type: "ALL" })}>
          All
        </button>
        <button type="button" onClick={() => send({ type: "ACTIVE" })}>
          Active
        </button>
        <button type="button" onClick={() => send({ type: "COMPLETE" })}>
          Complete
        </button>
        <div className="allCompleted">
          <button
            type="button"
            onClick={() => send({ type: "CLEAR_COMPLETE" })}
          >
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todos;
