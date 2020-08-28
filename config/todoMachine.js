import { Machine, assign, spawn } from "xstate";
import { deleteTodoAsync, updateTodoAsync } from "./actions";

export const todoMachine = Machine({
  id: "todo",
  initial: "idle",
  context: {
    todos: [
      { id: 1, value: "asdasdasd", complete: false },
      { id: 2, value: "asdasdasd", complete: false },
    ],
  },
  states: {
    idle: {
      on: {
        ADD: {
          actions: (ctx) => console.log("[todo]: ADD"),
        },
        CHECK: {
          actions: (ctx) => console.log("[todo]: CHECK"),
        },
      },
    },
  },
});

// todo
// export const todoMachine = Machine({
//   id: "todo",
//   initial: "idle",
//   context: {
//     todos: [],
//   },
//   states: {
//     idle: {
//       on: {
//         CHECK: {
//           actions: async (ctx, event) => await updateTodoAsync(ctx, event),
//         },
//         DELETE: {
//           actions: async (ctx, event) => await deleteTodoAsync(ctx, event),
//         },
//       },
//     },
//   },
// });
