import { todos, updateTodos } from "../../../static/data";

export default (req, res) => {
  const data = { todos: req.body.todos };

  updateTodos({ data });

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ data }));
};
