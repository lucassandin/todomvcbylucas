import { Machine, assign } from "xstate";
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
} from "./machine";

export const todosMachine = Machine({});

export const todoMachine = Machine({
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
          target: "initial",
        },
      },
    },
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
