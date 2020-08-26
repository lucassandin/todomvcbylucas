import { useState, useMemo, useEffect } from "react";
import { interpret, spawn } from "xstate";
import axios from "axios";

export const getTodosAsync = async () => {
  return await (await axios.get("/api/todos/all")).data.data.todos;
};

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

export const updateTodo = (ctx, event) => {
  const currenttodo = ctx.todos.todo.map((m) => {
    let aux = m;
    if (parseInt(event.todos.todo.id) === m.id) {
      if (event.todos.event.target.checked) aux = { ...m, complete: true };

      if (!event.todos.event.target.checked) aux = { ...m, complete: false };
    }
    return aux;
  });

  const data = {
    ...ctx.todos,
    todo: currenttodo,
  };

  return data;
};

// updated
export const changeTodo = (ctx, event) => {
  const data = { task: event.task };
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

// implemented with api
export const addTodoAsync = async (ctx, event) => {
  const result = await axios.post("/api/todos/add", { task: event.task });
};

export const todoActive = (ctx, event) => {
  const data = {
    ...ctx.todos,
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export const todoAll = (ctx, event) => {
  const data = {
    ...ctx.todos,
    todo: ctx.todos.todo,
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export const todoComplete = (ctx, event) => {
  const data = {
    ...ctx.todos,
  };

  return data;
};

// implemented with api
export const selectAllTodoAsync = async (ctx, event) => {
  const result = await (await axios.get("/api/todos/all")).data.data.todos;

  const alter = ctx.allselected ? false : true;
  const data = result.map((m) => {
    return { ...m, complete: alter };
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
