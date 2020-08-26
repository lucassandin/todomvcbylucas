var fs = require("fs");

export default async (req, res) => {
  const todos = { data: { todos: req.body.todos } };

  try {
    saveFile(JSON.stringify(todos));
  } catch (err) {
    console.log("There has been an error parsing your JSON.");
    console.log(err);
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(todos));
};

// save your data
const saveFile = (data) => {
  fs.writeFile("./public/data.json", data, (err) => {
    if (err) {
      console.log("There has been an error saving your data.");
      console.log(err.message);
      return;
    }
    console.log("Saved successfully.");
  });
};
