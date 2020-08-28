import { Machine, assign, spawn } from "xstate";
import { deleteTodoAsync, updateTodoAsync } from "./actions";
import axios from "axios";
import { todosMachine } from "./todosMachine";

export const todoMachine = Machine({
  id: "todo",
  initial: "initial",
  context: {
    todos: [],
    todosRef: undefined,
  },
  states: {
    initial: {
      invoke: {
        id: "todo_initial",
        src: async (ctx) => await axios.get("/api/todos/all"),
        onDone: {
          actions: [
            assign({
              todos: (ctx, event) => {
                return event.data.data.todos;
              },
            }),
          ],
          target: "idle",
        },
      },
    },
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
