import React, { useState, useMemo, useEffect } from "react";
import { Machine, interpret, assign } from "xstate";

const todoMachine = Machine({
  initial: "select",
  context: {
    todos: {
      formulary: {
        task: "machine",
      },
      list: [
        { id: 1, value: "task 1", complete: false },
        { id: 2, value: "task 2", complete: false },
        { id: 3, value: "task 3", complete: false },
        { id: 4, value: "task 4", complete: false },
      ],
      oldList: [
        { id: 1, value: "task 1", complete: false },
        { id: 2, value: "task 2", complete: false },
        { id: 3, value: "task 3", complete: false },
        { id: 4, value: "task 4", complete: false },
      ],
    },
  },
  states: {
    select: {
      invoke: {
        id: "updatelist",
        src: (ctx, event) => {
          console.log("atualizei");
          console.log(ctx);
        },
      },
      on: {
        CHANGE: [
          {
            target: "change",
            cond: (ctx, event) => {
              return event.task !== "";
            },
          },
        ],
        SELECT: [
          {
            target: "update",
            cond: (ctx, event) => {
              return event.task !== "";
            },
          },
        ],
        ADD: [
          {
            target: "add",
            cond: (ctx, event) => {
              return event.task !== "";
            },
          },
        ],
        ACTIVE: [
          {
            target: "active",
            cond: (ctx, event) => {
              return event.type !== "";
            },
          },
        ],
        ALL: [
          {
            target: "all",
            cond: (ctx, event) => {
              return event.type !== "";
            },
          },
        ],
        COMPLETE: [
          {
            target: "complete",
            cond: (ctx, event) => {
              return event.type !== "";
            },
          },
        ],
      },
    },
    all: {
      // all
      invoke: {
        id: "listall",
        src: (ctx, event) => listAll(ctx, event),
        onDone: {
          target: "select",
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = event.data);
            },
          }),
        },
      },
    },
    active: {
      // actives
      invoke: {
        id: "listactive",
        src: (ctx, event) => listActive(ctx, event),
        onDone: {
          target: "select",
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = event.data);
            },
          }),
        },
      },
    },
    complete: {
      // completes
      invoke: {
        id: "listcomplete",
        src: (ctx, event) => listComplete(ctx, event),
        onDone: {
          target: "select",
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = event.data);
            },
          }),
        },
      },
    },
    change: {
      invoke: {
        id: "changetodo",
        src: (ctx, event) => changeTodo(ctx, event),
        onDone: {
          target: "select",
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = event.data);
            },
          }),
        },
      },
    },
    update: {
      invoke: {
        id: "updatetodo",
        src: (ctx, event) => updateTodo(ctx, event),
        onDone: {
          target: "select",
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = event.data);
            },
          }),
        },
      },
    },
    add: {
      invoke: {
        id: "addtodo",
        src: (ctx, event) => addTodo(ctx, event),
        onDone: {
          target: "select",
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = event.data);
            },
          }),
        },
      },
    },
  },
});

const style = {
  color: "#0202028a",
  textDecoration: "line-through",
};

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

const changeTodo = (ctx, event) => {
  const data = {
    ...ctx.todos,
    formulary: { task: event.todo },
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

const addTodo = (ctx, event) => {
  const currentList = [
    ...ctx.todos.list,
    {
      id: event.data.todo.id,
      value: event.data.todo.value,
      complete: false,
    },
  ];

  const data = {
    ...ctx.todos,
    formulary: { task: event.data.task },
    list: currentList,
    oldList: currentList,
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

const updateTodo = (ctx, event) => {
  const currentList = ctx.todos.list.map((m) => {
    let aux = m;
    if (parseInt(event.todo.id) === m.id) {
      if (event.todo.event.target.checked)
        aux = { ...m, styled: style, complete: true };

      if (!event.todo.event.target.checked)
        aux = { ...m, styled: {}, complete: false };
    }
    return aux;
  });

  const data = {
    ...ctx.todos,
    list: currentList,
    oldList: currentList,
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

const listActive = (ctx, event) => {
  const data = {
    ...ctx.todos,
    list: ctx.todos.oldList.filter((f) => !f.complete),
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

const listAll = (ctx, event) => {
  const data = {
    ...ctx.todos,
    list: ctx.todos.oldList,
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

const listComplete = (ctx, event) => {
  const data = {
    ...ctx.todos,
    list: ctx.todos.oldList.filter((f) => f.complete),
  };

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

const Todos = () => {
  const [machine, send] = useMachine(todoMachine);
  const todos = machine.context.todos;

  console.log("State = ", machine.value);
  console.log(todos.list, todos.oldList);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formulary = {
            type: "ADD",
            data: {
              task: "",
              todo: {
                id: Math.floor(Math.random() * 1000 + 1),
                value: todos.formulary.task,
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
          value={todos.formulary.task}
          onChange={(e) => send({ type: "CHANGE", todo: e.target.value })}
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
              onChange={(e) => {
                send({
                  type: "SELECT",
                  todo: {
                    id: t.id,
                    value: t.value,
                    complete: true,
                    styled: style,
                    event: e,
                  },
                });
              }}
              checked={t.complete}
            />
            {t.value}
          </li>
        ))}

      <button type="button" onClick={() => send({ type: "ALL" })}>
        All
      </button>
      <button type="button" onClick={() => send({ type: "ACTIVE" })}>
        Active
      </button>
      <button type="button" onClick={() => send({ type: "COMPLETE" })}>
        Complete
      </button>
    </div>
  );
};

export default Todos;
