import fs from "fs";

export default async (req, res) => {
  const data = await fs.readFileSync(`.${__dirname}static/data.json`);
  let todos;

  try {
    todos = JSON.parse(data);
  } catch (err) {
    console.log(err);
    return {};
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(todos));
};
