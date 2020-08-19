import React, { useState, useEffect } from "react";
import { todoMachine } from "../../config/machines";
import { useMachine, countedItens, updatetodoList } from "../../config/actions";
import Todo from "../todo";
import "./style.css";

const Todos = () => {
  const [machine, send] = useMachine(todoMachine);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const count = updatetodoList(machine).filter((m) => m.complete);
    setTotal(count.length);
  });

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
          <label>{total} item left</label>
        </div>
        <button type="button" onClick={() => send("ALL")}>
          All
        </button>
        <button type="button" onClick={() => send("ACTIVE")}>
          Active
        </button>
        <button type="button" onClick={() => send("COMPLETE")}>
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
