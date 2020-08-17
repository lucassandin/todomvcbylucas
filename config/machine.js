import React, { useState, useMemo, useEffect } from "react";
import { Machine, interpret, assign, spawn, send } from "xstate";

export const todoMachine = Machine({
  initial: "initial",
  context: {
    todos: {
      formulary: {
        task: "",
      },
      todo: [
        { id: 1, value: "Task 1", complete: false },
        { id: 2, value: "Task 2", complete: false },
        { id: 3, value: "Task 3", complete: false },
        { id: 4, value: "Task 4", complete: false },
      ],
    },
  },
  states: {
    initial: {
      on: {
        INITIAL: [
          {
            target: "update",
          },
        ],
        CHANGE: [
          {
            target: "change",
            cond: (ctx, event) => event.todos.formulary.task !== "",
          },
        ],
        ADD: [
          {
            target: "add",
            cond: (ctx, event) => event.todos.formulary.task !== "",
          },
        ],
        ALL: [
          {
            target: "all",
          },
        ],
        ACTIVE: [
          {
            target: "active",
          },
        ],
        COMPLETE: [
          {
            target: "complete",
          },
        ],
        SELECT_ALL: [
          {
            target: "selectall",
          },
        ],
      },
    },
    update: {
      invoke: {
        id: "updatetodo",
        src: (ctx, event) => updateTodo(ctx, event),
        onDone: {
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = event.data);
            },
          }),
          target: "initial",
        },
      },
    },
    change: {
      invoke: {
        id: "changetodo",
        src: (ctx, event) => changeTodo(ctx, event),
        onDone: {
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = event.data);
            },
          }),
          target: "initial",
        },
      },
    },
    add: {
      invoke: {
        id: "addtodo",
        src: (ctx, event) => addTodo(ctx, event),
        onDone: {
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = event.data);
            },
          }),
          target: "initial",
        },
      },
    },
    all: {},
    active: {},
    complete: {},
    selectall: {
      invoke: {
        id: "selectall",
        src: (ctx, event) => selectAllTodo(ctx, event),
        onDone: {
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = event.data);
            },
          }),
          target: "initial",
        },
      },
    },
  },
});

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

const updateTodo = (ctx, event) => {
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

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

const changeTodo = (ctx, event) => {
  const data = {
    ...ctx.todos,
    formulary: { task: event.todos.formulary.task },
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

const addTodo = (ctx, event) => {
  const currenttodo = [
    ...ctx.todos.todo,
    {
      id: event.todos.todo.id,
      value: event.todos.todo.value,
      complete: false,
    },
  ];

  const data = {
    ...ctx.todos,
    formulary: { task: "" },
    todo: currenttodo,
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

const todoActive = (ctx, event) => {
  const data = {
    ...ctx.todos,
    todo: ctx.todos.todo.filter((f) => !f.complete),
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

const todoAll = (ctx, event) => {
  const data = {
    ...ctx.todos,
    todo: ctx.todos.todo,
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

const todoComplete = (ctx, event) => {
  const data = {
    ...ctx.todos,
    todo: ctx.todos.todo.filter((f) => f.complete),
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

const selectAllTodo = (ctx, event) => {
  const data = {
    ...ctx.todos,
    todo: ctx.todos.todo.map((m) => {
      return [{ ...m, complete: true }];
    }),
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export const updatetodo = (machine) => {
  switch (machine.value) {
    case "active":
      return machine.context.todos.todo.filter((f) => !f.complete);
    case "complete":
      return machine.context.todos.todo.filter((f) => f.complete);
    case "initial":
      return machine.context.todos.todo;
    default:
      return machine.context.todos.todo;
  }
};

export const countedItens = (machine) => {
  const count = machine.context.todos.todo.filter((m) => m.complete);
  return count.length;
};
