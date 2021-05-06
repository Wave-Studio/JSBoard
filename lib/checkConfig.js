import fs from "fs";

export default function(){
    return fs.existsSync("./.jsboard/config.json");
}