import { Machine, assign, spawn } from "xstate";
import { deleteTodoAsync, updateTodoAsync } from "./actions";

// todo
export const todoMachine = Machine({
  id: "todo",
  initial: "idle",
  context: {
    todos: [],
  },
  states: {
    idle: {
      on: {
        CHECK: {
          actions: async (ctx, event) => await updateTodoAsync(ctx, event),
        },
        DELETE: {
          actions: async (ctx, event) => await deleteTodoAsync(ctx, event),
        },
      },
    },
  },
});
