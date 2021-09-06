import { Database } from "quickmongo";
const db = new Database(process.env.DB_LINK);

export default async function () {
  /*if (!db.connection) {
    db.on("ready", () => {
      console.log("Database connected");
    });
  } 
  var name = await db.get("configed");
  //for testing, we will normally set that to true after they actually configure jsboard
  if (name == null) {
    await db.set("configed", true)
    
  }; */
  return true
}
