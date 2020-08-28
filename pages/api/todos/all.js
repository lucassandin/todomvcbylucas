import fs from "fs";

export default async (req, res) => {
  let todos = await fs.readFileSync(`.${__dirname}static/data.json`);

  try {
    todos = JSON.parse(todos);
  } catch (err) {
    console.log("There has been an error parsing your JSON.");
    console.log(err);
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(todos));
};
