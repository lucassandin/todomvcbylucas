import { Machine, assign, spawn } from "xstate";
import {
  addTodoAsync,
  selectAllTodoAsync,
  clearCompleteAsync,
  deleteTodoAsync,
  updateTodoAsync,
} from "./actions";

// todo
export const todoMachine = Machine({
  id: "todo",
  initial: "initial",
  context: {
    data: {
      task: "",
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
        CHANGE: {
          actions: assign({
            data: (ctx, event) => {
              const obj = { ...ctx.data, task: event.task };
              return (ctx.data = obj);
            },
          }),
        },
        ADD: {
          actions: assign({
            data: (ctx, event) => {
              addTodoAsync(ctx, event).then();
              const obj = { ...ctx.data, task: "" };
              return (ctx.data = obj);
            },
          }),
        },
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
        SELECT_ALL: {
          actions: async (ctx, event) => await selectAllTodoAsync(ctx, event),
        },
        CLEAR_COMPLETE: {
          actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
        },
        DELETE: {
          actions: async (ctx, event) => await deleteTodoAsync(ctx, event),
        },
      },
    },
    update: {
      invoke: {
        id: "updatetodo",
        src: async (ctx, event) => await updateTodoAsync(ctx, event),
        onDone: {
          target: "initial",
        },
      },
    },
    all: {
      on: {
        INITIAL: {
          actions: async (ctx, event) => await updateTodoAsync(ctx, event),
        },
        ACTIVE: {
          target: "active",
        },
        COMPLETE: {
          target: "complete",
        },
        SELECT_ALL: {
          actions: async (ctx, event) => await selectAllTodoAsync(ctx, event),
        },
        CLEAR_COMPLETE: {
          actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
        },
        DELETE: {
          actions: async (ctx, event) => await deleteTodoAsync(ctx, event),
        },
        CHANGE: {
          actions: assign({
            data: (ctx, event) => {
              const obj = { ...ctx.data, task: event.task };
              return (ctx.data = obj);
            },
          }),
        },
        ADD: {
          actions: assign({
            data: (ctx, event) => {
              addTodoAsync(ctx, event).then();
              const obj = { ...ctx.data, task: "" };
              return (ctx.data = obj);
            },
          }),
        },
      },
    },
    active: {
      invoke: {
        id: "active",
        src: async (ctx, event) => await updateTodoAsync(ctx, event),
      },
      on: {
        INITIAL: {
          actions: async (ctx, event) => await updateTodoAsync(ctx, event),
        },
        COMPLETE: {
          target: "complete",
        },
        SELECT_ALL: {
          actions: async (ctx, event) => await selectAllTodoAsync(ctx, event),
        },
        CLEAR_COMPLETE: {
          actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
        },
        DELETE: {
          actions: async (ctx, event) => await deleteTodoAsync(ctx, event),
        },
        CHANGE: {
          actions: assign({
            data: (ctx, event) => {
              const obj = { ...ctx.data, task: event.task };
              return (ctx.data = obj);
            },
          }),
        },
        ADD: {
          actions: assign({
            data: (ctx, event) => {
              addTodoAsync(ctx, event).then();
              const obj = { ...ctx.data, task: "" };
              return (ctx.data = obj);
            },
          }),
        },
        ALL: {
          target: "all",
        },
      },
    },
    complete: {
      invoke: {
        id: "complete",
        src: async (ctx, event) => await updateTodoAsync(ctx, event),
      },
      on: {
        INITIAL: {
          actions: async (ctx, event) => await updateTodoAsync(ctx, event),
        },
        ACTIVE: {
          target: "active",
        },
        COMPLETE: {
          target: "complete",
        },
        SELECT_ALL: {
          actions: async (ctx, event) => await selectAllTodoAsync(ctx, event),
        },
        CLEAR_COMPLETE: {
          actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
        },
        DELETE: {
          actions: async (ctx, event) => await deleteTodoAsync(ctx, event),
        },
        CHANGE: {
          actions: assign({
            data: (ctx, event) => {
              const obj = { ...ctx.data, task: event.task };
              return (ctx.data = obj);
            },
          }),
        },
        ADD: {
          actions: assign({
            data: (ctx, event) => {
              addTodoAsync(ctx, event).then();
              const obj = { ...ctx.data, task: "" };
              return (ctx.data = obj);
            },
          }),
        },
        ALL: {
          target: "all",
        },
      },
    },
  },
});
