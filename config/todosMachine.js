import { Machine, assign, spawn } from "xstate";
import { todoMachine } from "./todoMachine";
import {
  addTodoAsync,
  selectAllTodoAsync,
  clearCompleteAsync,
} from "./actions";

export const todosMachine = Machine({
  id: "todos",
  initial: "idle",
  context: {
    task: "",
    todo: {},
  },
  states: {
    idle: {
      on: {
        INIT: "todo",
      },
    },
    todo: {
      invoke: {
        id: "todo",
        src: todoMachine,
        data: {
          todos: [],
        },
        onDone: {
          target: "idle",
        },
      },
    },
  },
});

// todos
// export const todosMachine = Machine({
//   id: "todos",
//   initial: "idle",
//   context: {
//     data: {
//       task: "",
//     },
//   },
//   states: {
//     idle: {
//       on: {
//         CHANGE: {
//           actions: assign({
//             data: (ctx, event) => {
//               const obj = { ...ctx.data, task: event.task };
//               return (ctx.data = obj);
//             },
//           }),
//         },
//         ADD: {
//           actions: assign({
//             data: (ctx, event) => {
//               addTodoAsync(ctx, event).then();
//               const obj = { ...ctx.data, task: "" };
//               return (ctx.data = obj);
//             },
//           }),
//         },
//         SELECT_ALL: {
//           actions: async (ctx, event) => await selectAllTodoAsync(ctx, event),
//         },
//         CLEAR_COMPLETE: {
//           actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
//         },
//         ALL: "all",
//         ACTIVE: "active",
//         COMPLETE: "complete",
//       },
//     },
//     all: {
//       on: {
//         CHANGE: {
//           actions: assign({
//             data: (ctx, event) => {
//               const obj = { ...ctx.data, task: event.task };
//               return (ctx.data = obj);
//             },
//           }),
//         },
//         ADD: {
//           actions: assign({
//             data: (ctx, event) => {
//               addTodoAsync(ctx, event).then();
//               const obj = { ...ctx.data, task: "" };
//               return (ctx.data = obj);
//             },
//           }),
//         },
//         SELECT_ALL: {
//           actions: async (ctx, event) => await selectAllTodoAsync(ctx, event),
//         },
//         CLEAR_COMPLETE: {
//           actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
//         },
//         ACTIVE: "active",
//         COMPLETE: "complete",
//       },
//     },
//     active: {
//       on: {
//         CHANGE: {
//           actions: assign({
//             data: (ctx, event) => {
//               const obj = { ...ctx.data, task: event.task };
//               return (ctx.data = obj);
//             },
//           }),
//         },
//         ADD: {
//           actions: assign({
//             data: (ctx, event) => {
//               addTodoAsync(ctx, event).then();
//               const obj = { ...ctx.data, task: "" };
//               return (ctx.data = obj);
//             },
//           }),
//         },
//         SELECT_ALL: {
//           actions: async (ctx, event) => await selectAllTodoAsync(ctx, event),
//         },
//         CLEAR_COMPLETE: {
//           actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
//         },
//         ALL: "all",
//         COMPLETE: "complete",
//       },
//     },
//     complete: {
//       on: {
//         CHANGE: {
//           actions: assign({
//             data: (ctx, event) => {
//               const obj = { ...ctx.data, task: event.task };
//               return (ctx.data = obj);
//             },
//           }),
//         },
//         ADD: {
//           actions: assign({
//             data: (ctx, event) => {
//               addTodoAsync(ctx, event).then();
//               const obj = { ...ctx.data, task: "" };
//               return (ctx.data = obj);
//             },
//           }),
//         },
//         SELECT_ALL: {
//           actions: async (ctx, event) => await selectAllTodoAsync(ctx, event),
//         },
//         CLEAR_COMPLETE: {
//           actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
//         },
//         ALL: "all",
//         ACTIVE: "active",
//       },
//     },
//   },
// });
