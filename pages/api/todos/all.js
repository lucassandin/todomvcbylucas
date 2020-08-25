import { todos } from "../../../data/data";

export default (req, res) => {
  const { data } = todos;
  console.log(data);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ data }));
};
