import React, { useState, useMemo, useEffect } from "react";
import { Machine, interpret } from "xstate";

const useMachine = (machine) => {
  const [current, setCurrent] = useState(machine.initialState);

  const service = useMemo(
    () =>
      interpret(machine)
        .onTransition((state) => {
          if (state.changed) {
            setCurrent(state);
          }
        })
        .start(),
    []
  );

  useEffect(() => {
    return () => service.stop();
  }, []);

  return [current, service.send];
};

const todoMachine = Machine({
  initial: "all",
  states: {
    all: {
      // all
    },
    active: {
      // actives
    },
    complete: {
      // completes
    },
  },
});

const Todos = () => {
  const [machine, send] = useMachine(todoMachine);
  const [todos, setTodos] = useState({
    formulary: {
      task: "teste",
    },
    list: [
      { id: 1, value: "task 1", complete: false },
      { id: 2, value: "task 2", complete: false },
      { id: 3, value: "task 3", complete: false },
      { id: 4, value: "task 4", complete: false },
    ],
  });

  console.log(todos.formulary);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formulary = [
            ...todos.list,
            {
              id: Math.floor(Math.random() * 1000 + 1),
              value: e.target.value,
              complete: false,
            },
          ];

          setTodos(formulary);
        }}
      >
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="Task here"
          value={todos.formulary.task}
          onChange={(e) =>
            setTodos({
              ...todos,
              formulary: { task: e.target.value },
            })
          }
        ></input>
        <button type="submit">save</button>
      </form>

      {todos.list &&
        todos.list.map((t) => (
          <li key={t.id} style={t.styled}>
            <input
              type="checkbox"
              id={t.id}
              name="register"
              value={t.value}
              onChange={(e) => this.props.change(e)}
              checked={t.complete}
            />
            {t.value}
          </li>
        ))}

      <button type="button" onClick={{}}>
        All
      </button>
      <button type="button" onClick={{}}>
        Active
      </button>
      <button type="button" onClick={{}}>
        Complete
      </button>
    </div>
  );
};

export default Todos;
