var fs = require("fs");

export default async (req, res) => {
  var data = await fs.readFileSync("./data/data.json");
  var todos;

  try {
    todos = JSON.parse(data);
  } catch (err) {
    console.log("There has been an error parsing your JSON.");
    console.log(err);
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(todos));
};
