import { todos, updateTodos } from "../../../data/data";

export default (req, res) => {
  const { body } = req;

  const data = {
    ...todos.data,
    todos: [
      ...todos.data.todos,
      {
        id: Math.floor(Math.random() * 1000 + 1),
        value: body.task,
        complete: false,
      },
    ],
  };

  updateTodos({ data });

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ data }));
};
