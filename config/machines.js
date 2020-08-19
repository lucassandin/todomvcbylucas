import { Machine, assign, spawn } from "xstate";
import {
  useMachine,
  updateTodo,
  changeTodo,
  addTodo,
  todoActive,
  todoAll,
  todoComplete,
  selectAllTodo,
  clearComplete,
  deleteTodo,
  updatetodoList,
  countedItens,
  updateTodoTeste,
  updateTodoAsync,
} from "./actions";

export const todoMachine = Machine({
  id: "todo",
  initial: "initial",
  context: {
    todos: {
      allselected: false,
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
        CLEAR_COMPLETE: [
          {
            target: "clearcomplete",
          },
        ],
        DELETE: [
          {
            target: "delete",
          },
        ],
      },
    },
    update: {
      invoke: {
        id: "updatetodo",
        src: (ctx, event) => updateTodoAsync(ctx, event),
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
    all: {
      invoke: {
        id: "all",
        src: (ctx, event) => todoAll(ctx, event),
        autoForward: true,
        onDone: {
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = event.data);
            },
          }),
        },
      },
      on: {
        INITIAL: {
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = updateTodo(ctx, event));
            },
          }),
        },
        ACTIVE: {
          actions: assign({
            todos: (ctx, event) => {
              const data = {
                ...ctx.todos,
              };
              return (ctx.todos = data);
            },
          }),
          target: "active",
        },
        COMPLETE: {
          actions: assign({
            todos: (ctx, event) => {
              const e = todoComplete(ctx, event);
              return (ctx.todos = e);
            },
          }),
          target: "complete",
        },
        CLEAR_COMPLETE: {
          actions: assign({
            todos: (ctx, event) => {
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
              return (ctx.todos = data);
            },
          }),
          target: "initial",
        },
        DELETE: {
          actions: assign({
            todos: (ctx, event) => {
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
              return (ctx.todos = data);
            },
          }),
          target: "initial",
        },
        SELECT_ALL: {
          actions: assign({
            todos: (ctx, event) => {
              const alter = ctx.todos.allselected ? false : true;
              const data = {
                ...ctx.todos,
                allselected: alter,
                todo: ctx.todos.todo.map((m) => {
                  return { ...m, complete: alter };
                }),
              };
              return (ctx.todos = data);
            },
          }),
        },
        CHANGE: {
          actions: assign({
            todos: (ctx, event) => {
              const data = {
                ...ctx.todos,
                formulary: { task: event.todos.formulary.task },
              };
              return (ctx.todos = data);
            },
          }),
        },
        ADD: {
          actions: assign({
            todos: (ctx, event) => {
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
              return (ctx.todos = data);
            },
          }),
        },
      },
    },
    active: {
      invoke: {
        id: "active",
        src: (ctx, event) => todoActive(ctx, event),
        autoForward: true,
        onDone: {
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = event.data);
            },
          }),
        },
      },
      on: {
        INITIAL: {
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = updateTodo(ctx, event));
            },
          }),
        },
        COMPLETE: {
          actions: assign({
            todos: (ctx, event) => {
              const e = todoComplete(ctx, event);
              return (ctx.todos = e);
            },
          }),
          target: "complete",
        },
        ALL: {
          actions: assign({
            todos: (ctx, event) => {
              const data = {
                ...ctx.todos,
              };
              return (ctx.todos = data);
            },
          }),
          target: "all",
        },
        CLEAR_COMPLETE: {
          actions: assign({
            todos: (ctx, event) => {
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
              return (ctx.todos = data);
            },
          }),
          target: "initial",
        },
        DELETE: {
          actions: assign({
            todos: (ctx, event) => {
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
              return (ctx.todos = data);
            },
          }),
          target: "initial",
        },
        SELECT_ALL: {
          actions: assign({
            todos: (ctx, event) => {
              const alter = ctx.todos.allselected ? false : true;
              const data = {
                ...ctx.todos,
                allselected: alter,
                todo: ctx.todos.todo.map((m) => {
                  return { ...m, complete: alter };
                }),
              };
              return (ctx.todos = data);
            },
          }),
        },
        CHANGE: {
          actions: assign({
            todos: (ctx, event) => {
              const data = {
                ...ctx.todos,
                formulary: { task: event.todos.formulary.task },
              };
              return (ctx.todos = data);
            },
          }),
        },
        ADD: {
          actions: assign({
            todos: (ctx, event) => {
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
              return (ctx.todos = data);
            },
          }),
        },
      },
    },
    complete: {
      invoke: {
        id: "complete",
        src: (ctx, event) => todoComplete(ctx, event),
        autoForward: true,
        onDone: {
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = event.data);
            },
          }),
        },
      },
      on: {
        INITIAL: {
          actions: assign({
            todos: (ctx, event) => {
              return (ctx.todos = updateTodo(ctx, event));
            },
          }),
        },
        ACTIVE: {
          actions: assign({
            todos: (ctx, event) => {
              const data = {
                ...ctx.todos,
              };
              return (ctx.todos = data);
            },
          }),
          target: "active",
        },
        ALL: {
          actions: assign({
            todos: (ctx, event) => {
              const data = {
                ...ctx.todos,
              };
              return (ctx.todos = data);
            },
          }),
          target: "all",
        },
        CLEAR_COMPLETE: {
          actions: assign({
            todos: (ctx, event) => {
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
              return (ctx.todos = data);
            },
          }),
          target: "initial",
        },
        DELETE: {
          actions: assign({
            todos: (ctx, event) => {
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
              return (ctx.todos = data);
            },
          }),
          target: "initial",
        },
        SELECT_ALL: {
          actions: assign({
            todos: (ctx, event) => {
              const alter = ctx.todos.allselected ? false : true;
              const data = {
                ...ctx.todos,
                allselected: alter,
                todo: ctx.todos.todo.map((m) => {
                  return { ...m, complete: alter };
                }),
              };
              return (ctx.todos = data);
            },
          }),
        },
        CHANGE: {
          actions: assign({
            todos: (ctx, event) => {
              const data = {
                ...ctx.todos,
                formulary: { task: event.todos.formulary.task },
              };
              return (ctx.todos = data);
            },
          }),
        },
        ADD: {
          actions: assign({
            todos: (ctx, event) => {
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
              return (ctx.todos = data);
            },
          }),
        },
      },
    },
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
    clearcomplete: {
      invoke: {
        id: "clearcomplete",
        src: (ctx, event) => clearComplete(ctx, event),
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
    delete: {
      invoke: {
        id: "delete",
        src: (ctx, event) => deleteTodo(ctx, event),
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
