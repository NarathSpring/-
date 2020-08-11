import express from "express";
import fs from "fs";
import YAML from "yaml";
import { Request, Response, NextFunction } from "express";

const Router = express.Router();

Router.get("/city/:name", cityHandler);

Router.get("/province/:name", provinceHandler);

function cityHandler(req: Request, res: Response) {
  const data = fs.readFileSync("./data/city.yml", "utf-8");
  const result = YAML.parse(data);
  let params = req.params.name;

  const lastWord = params.slice(params.length - 1, params.length);
  lastWord === "市" ? (params = params.slice(0, params.length - 1)) : params;

  res.json({ result: result[params] });
}

function provinceHandler(req: Request, res: Response) {
  const data = fs.readFileSync("./data/province.yml", "utf-8");
  const result = YAML.parse(data);
  let params = req.params.name;

  const lastWord = params.slice(params.length - 1, params.length);
  lastWord === "省" ? (params = params.slice(0, params.length - 1)) : params;

  res.json({ result: result[params] });
}

export default Router;
