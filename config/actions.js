import { useState, useMemo, useEffect } from "react";
import { interpret, spawn } from "xstate";
import axios from "axios";

export const useMachine = (machine) => {
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

// implemented with api
export const updateTodoAsync = async (ctx, event) => {
  const result = await (await axios.get("/api/todos/all")).data.data.todos;

  const data = result.map((m) => {
    let aux = m;
    if (parseInt(event.id) === m.id) {
      if (event.checked) aux = { ...m, complete: true };

      if (!event.checked) aux = { ...m, complete: false };
    }
    return aux;
  });

  const update = await axios.put("/api/todos/update", { todos: data });

  return update;
};

// implemented with api
export const addTodoAsync = async (ctx, event) => {
  const result = await axios.post("/api/todos/add", { task: event.task });
};

// implemented with api
export const selectAllTodoAsync = async (ctx, event) => {
  const result = await (await axios.get("/api/todos/all")).data.data.todos;

  const alter = ctx.all ? false : true;
  const data = result.map((m) => {
    m.complete = alter;
    return m;
  });
  const update = await axios.put("/api/todos/update", { todos: data });
};

// implemented with api
export const clearCompleteAsync = async (ctx, event) => {
  const result = await (await axios.get("/api/todos/all")).data.data.todos;

  const data = result.reduce((prev, item, i, array) => {
    if (!array[i].complete) {
      prev.push({
        ...item,
      });
    }

    return prev;
  }, []);

  const update = await axios.put("/api/todos/update", { todos: data });

  return update;
};

// implemented with api
export const deleteTodoAsync = async (ctx, event) => {
  const result = await axios.get(`/api/todos/${event.id}`);
};

// implemented with api
export const updatetodoList = async (state) => {
  const {
    data: { data },
  } = await axios.get("/api/todos/all");

  switch (state) {
    case "active":
      return data.todos.filter((f) => !f.complete);
    case "complete":
      return data.todos.filter((f) => f.complete);
    case "initial":
      return data.todos;
    case "clearcomplete":
      return data.todos.filter((f) => !f.complete);
    default:
      return data.todos;
  }
};
