import { useState, useMemo, useEffect } from "react";
import { interpret } from "xstate";

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

export const updateTodoAsync = (ctx, event) => {
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

export const changeTodo = (ctx, event) => {
  const data = {
    ...ctx.todos,
    formulary: { task: event.todos.formulary.task },
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export const addTodo = (ctx, event) => {
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

export const selectAllTodo = (ctx, event) => {
  const alter = ctx.todos.allselected ? false : true;
  const data = {
    ...ctx.todos,
    allselected: alter,
    todo: ctx.todos.todo.map((m) => {
      return { ...m, complete: alter };
    }),
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export const clearComplete = (ctx, event) => {
  const data = {
    ...ctx.todos,
    todo: ctx.todos.todo.reduce((prev, item, i, array) => {
      if (!array[i].complete) {
        prev.push({
          ...item,
        });
      }

      return prev;
    }, []),
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export const deleteTodo = (ctx, event) => {
  const data = {
    ...ctx.todos,
    todo: ctx.todos.todo.reduce((prev, item, i, arr) => {
      if (arr[i].id !== event.todos.todo.id) {
        prev.push({
          ...item,
        });
      }

      return prev;
    }, []),
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export const updatetodoList = (machine) => {
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
