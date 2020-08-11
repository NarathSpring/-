import express from "express";
import route from './src/route'
const app = express();

app.use(route)

app.listen(3332, () => {
  console.log("city-code on 3332");
});
