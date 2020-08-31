import { Machine, assign, spawn } from "xstate";
import {
  addTodoAsync,
  selectAllTodoAsync,
  clearCompleteAsync,
  updateTodoAsync,
  deleteTodoAsync,
} from "./actions";

// todos
export const todosMachine = Machine({
  id: "todos",
  initial: "idle",
  context: {
    all: false,
    data: {
      task: "",
    },
  },
  states: {
    idle: {
      on: {
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
        SELECT_ALL: {
          actions: assign({
            all: (ctx, event) => {
              selectAllTodoAsync(ctx, event).then();
              return ctx.all ? false : true;
            },
          }),
        },
        CLEAR_COMPLETE: {
          actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
        },
        CHECK: {
          actions: async (ctx, event) => await updateTodoAsync(ctx, event),
        },
        DELETE: {
          actions: async (ctx, event) => await deleteTodoAsync(ctx, event),
        },
        ALL: "all",
        ACTIVE: "active",
        COMPLETE: "complete",
      },
    },
    all: {
      on: {
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
        SELECT_ALL: {
          actions: assign({
            all: (ctx, event) => {
              selectAllTodoAsync(ctx, event).then();
              return ctx.all ? false : true;
            },
          }),
        },
        CLEAR_COMPLETE: {
          actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
        },
        CHECK: {
          actions: async (ctx, event) => await updateTodoAsync(ctx, event),
        },
        DELETE: {
          actions: async (ctx, event) => await deleteTodoAsync(ctx, event),
        },
        ACTIVE: "active",
        COMPLETE: "complete",
      },
    },
    active: {
      on: {
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
        SELECT_ALL: {
          actions: assign({
            all: (ctx, event) => {
              selectAllTodoAsync(ctx, event).then();
              return ctx.all ? false : true;
            },
          }),
        },
        CLEAR_COMPLETE: {
          actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
        },
        CHECK: {
          actions: async (ctx, event) => await updateTodoAsync(ctx, event),
        },
        DELETE: {
          actions: async (ctx, event) => await deleteTodoAsync(ctx, event),
        },
        ALL: "all",
        COMPLETE: "complete",
      },
    },
    complete: {
      on: {
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
        SELECT_ALL: {
          actions: assign({
            all: (ctx, event) => {
              selectAllTodoAsync(ctx, event).then();
              return ctx.all ? false : true;
            },
          }),
        },
        CLEAR_COMPLETE: {
          actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
        },
        CHECK: {
          actions: async (ctx, event) => await updateTodoAsync(ctx, event),
        },
        DELETE: {
          actions: async (ctx, event) => await deleteTodoAsync(ctx, event),
        },
        ALL: "all",
        ACTIVE: "active",
      },
    },
  },
});
