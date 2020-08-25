export let todos = {
  data: {
    todos: [
      { id: 1, value: "Task 1", complete: false },
      { id: 2, value: "Task 2", complete: false },
      { id: 3, value: "Task 3", complete: false },
      { id: 4, value: "Task 4", complete: false },
    ],
  },
};

export function updateTodos(pTodos) {
  todos = pTodos;
}
