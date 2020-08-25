import { todos, updateTodos } from "../../../data/data";

export default (req, res) => {
  const data = { todos: req.body.todos };

  updateTodos({ data });

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ data }));
};
