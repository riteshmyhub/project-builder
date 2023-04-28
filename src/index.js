import * as fs from "fs";
import listPrompt from "./prompts/list.prompt.js";
import { http } from "./environments/environments.js";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function selectProjects() {
   try {
      const { data } = await http.get("");
      let projects = data.map((elememt) => elememt?.name);
      listPrompt({
         questionObj: {
            type: "list",
            message: "please select projects",
            name: "project",
            choices: projects,
         },
         callback: (answer) => {
            download_temporarily_file(answer.project);
         },
      });
   } catch (error) {
      console.log(error);
   }
}
selectProjects();

async function download_temporarily_file(endpoint) {
   let setUpUrl = process.cwd() + "/setup";
   try {
      let { data } = await http.get(`/${endpoint}`);
      let meta_file = data.find((element) => {
         return element.type === "file";
      });
      if (!fs.existsSync(setUpUrl)) {
         fs.mkdirSync(setUpUrl, () => {});
      }
      if (meta_file) {
         fs.createWriteStream(`${setUpUrl}/${meta_file.name}`);
         let { data } = await http.get(meta_file.download_url);
         fs.appendFileSync(`${setUpUrl}/${meta_file.name}`, JSON.stringify(data), (error, data) => {});

         const jsonData = fs.readFileSync(`${setUpUrl}/${meta_file.name}`, { encoding: "utf8", flag: "r" });
         create_app(JSON.parse(jsonData));
      }
   } catch (error) {
      console.log(error);
   }
}

function create_app(dataArray) {
   dataArray.forEach((elememt) => {
      if (!fs.existsSync(elememt.dir)) {
         fs.mkdirSync(elememt.dir, { recursive: true });
      }
      if (fs.existsSync(elememt.dir)) {
         fs.createWriteStream(elememt.dir + "/" + elememt.filename);
         fs.appendFileSync(elememt.dir + "/" + elememt.filename, elememt.url, () => {});
      }
   });
}
