import { Machine, assign, spawn } from "xstate";
import axios from "axios";
import {
  updateTodo,
  changeTodo,
  addTodoAsync,
  todoActive,
  todoAll,
  todoComplete,
  selectAllTodoAsync,
  clearCompleteAsync,
  deleteTodoAsync,
  updateTodoAsync,
  getTodosAsync,
} from "./actions";

export const todoMachine = Machine({
  id: "todo",
  initial: "initial",
  context: {
    data: {
      allselected: false,
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
        CHANGE: [
          {
            target: "change",
          },
        ],
        ADD: [
          {
            target: "add",
            cond: (ctx, event) => event.task !== "",
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
        src: async (ctx, event) => await updateTodoAsync(ctx, event),
        onDone: {
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
            data: (ctx, event) => {
              return (ctx.data = { ...ctx.data, task: event.data.task });
            },
          }),
          target: "initial",
        },
      },
    },
    add: {
      invoke: {
        id: "addtodo",
        src: async (ctx, event) => await addTodoAsync(ctx, event),
        onDone: {
          actions: assign({
            data: (ctx, event) => (ctx.data = { ...ctx.data, task: "" }),
          }),
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
        CLEAR_COMPLETE: {
          actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
        },
        DELETE: {
          target: "delete",
        },
        SELECT_ALL: {
          target: "selectall",
        },
        CHANGE: {
          target: "change",
        },
        ADD: {
          target: "add",
        },
      },
    },
    active: {
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
        CLEAR_COMPLETE: {
          actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
        },
        DELETE: {
          target: "delete",
        },
        SELECT_ALL: {
          target: "selectall",
        },
        CHANGE: {
          target: "change",
        },
        ADD: {
          target: "add",
        },
        ALL: {
          target: "all",
        },
      },
    },
    complete: {
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
        CLEAR_COMPLETE: {
          actions: async (ctx, event) => await clearCompleteAsync(ctx, event),
        },
        DELETE: {
          target: "delete",
        },
        SELECT_ALL: {
          target: "selectall",
        },
        CHANGE: {
          target: "change",
        },
        ADD: {
          target: "add",
        },
        ALL: {
          target: "all",
        },
      },
    },
    selectall: {
      invoke: {
        id: "selectall",
        src: async (ctx, event) => await selectAllTodoAsync(ctx, event),
        onDone: {
          actions: assign({
            allselected: (ctx, event) => {
              return ctx.allselected ? false : true;
            },
          }),
          target: "initial",
        },
      },
    },
    clearcomplete: {
      invoke: {
        id: "clearcomplete",
        src: async (ctx, event) => await clearCompleteAsync(ctx, event),
        onDone: {
          target: "initial",
        },
      },
      on: {
        ACTIVE: {
          target: "active",
        },
        COMPLETE: {
          target: "complete",
        },
        CLEAR_COMPLETE: {
          target: "clearcomplete",
        },
        DELETE: {
          target: "delete",
        },
        SELECT_ALL: {
          target: "selectall",
        },
        CHANGE: {
          target: "change",
        },
        ADD: {
          target: "add",
        },
        ALL: {
          target: "all",
        },
      },
    },
    delete: {
      invoke: {
        id: "delete",
        src: async (ctx, event) => await deleteTodoAsync(ctx, event),
        onDone: {
          target: "initial",
        },
      },
    },
  },
});
