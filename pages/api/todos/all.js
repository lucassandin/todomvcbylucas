import fs from "fs";
import getConfig from "next/config";

export default async (req, res) => {
  const { publicRuntimeConfig } = getConfig();
  const data = await fs.readFileSync(`.${__dirname}static/data.json`);
  let todos;

  console.log(publicRuntimeConfig.staticFolder);

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
