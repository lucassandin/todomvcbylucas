var fs = require("fs");

export default async (req, res) => {
  const { body } = req;

  let data = await fs.readFileSync(`.${__dirname}static/data.json`);
  let todos = "";

  try {
    todos = JSON.parse(data);
  } catch (err) {
    console.log("There has been an error parsing your JSON.");
    console.log(err);
  }

  todos = {
    todos: [
      ...todos.todos,
      {
        id: Math.floor(Math.random() * 1000 + 1),
        value: body.task,
        complete: false,
      },
    ],
  };

  saveFile(JSON.stringify(todos));

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(todos));
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
