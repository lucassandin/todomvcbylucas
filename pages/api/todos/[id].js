var fs = require("fs");

export default async (req, res) => {
  const {
    query: { id },
  } = req;

  let data = await fs.readFileSync(`.${__dirname}static/data.json`);
  let todos;

  try {
    todos = JSON.parse(data);
  } catch (err) {
    console.log("There has been an error parsing your JSON.");
    console.log(err);
  }

  if (todos.todos.find((f) => f.id === parseInt(id))) {
    todos = {
      todos: todos.todos.filter((f) => f.id !== parseInt(id)),
    };

    saveFile(JSON.stringify(todos));

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(todos));
  } else {
    res.statusCode = 400;
    res.end(JSON.stringify({ data: "Not found" }));
  }
};

// save your data
const saveFile = (data) => {
  fs.writeFile(`.${__dirname}static/data.json`, data, (err) => {
    if (err) {
      console.log("There has been an error saving your data.");
      console.log(err.message);
      return;
    }
    console.log("Saved successfully.");
  });
};
