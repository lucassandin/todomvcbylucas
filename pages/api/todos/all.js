// import { todos } from "../../../data/data";
import { todos } from "../../../public/data";

export default (req, res) => {
  const { data } = todos;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ data }));
};
