import { todos, updateTodos } from "../../../data/data";

export default (req, res) => {
  const {
    query: { id },
  } = req;

  if (todos.data.todos.find((f) => f.id === parseInt(id))) {
    const data = {
      todos: todos.data.todos.filter((f) => f.id !== parseInt(id)),
    };

    updateTodos({ data });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ data }));
  } else {
    res.statusCode = 400;
    res.end(JSON.stringify({ data: "Not found" }));
  }
};
