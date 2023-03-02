let fs = require("fs");
const superagent = require("superagent");
let readFilesync = "text1.txt";

async function readFile(fileName) {
  try {
    let p1 = await fs.promises.readFile(fileName, "utf8");
    console.log(p1);
    let p2= await superagent.get(`https://api.nationalize.io?name=${p1}`);
    console.log(p2);
    let p3 = p2.body.country[0].country_id;
    fs.promises.writeFile("text3.txt", p3);
    console.log("Success");
  } catch (e) {
    console.log(e);
  }
}
readFile(readFilesync);
