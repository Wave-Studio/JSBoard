import fs from "fs";
var db;

class dbManager {
  constructor() {}
  createDB() {
    if (!fs.existsSync("./.jsboard/config.json"))
      throw new Error("Database is not configured!");
  }
}
