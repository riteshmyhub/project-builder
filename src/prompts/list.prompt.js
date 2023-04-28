import inquirer from "inquirer";

export default async function listPrompt({ questionObj, callback }) {
   try {
      let answer = await inquirer.prompt([questionObj]);
      callback(answer);
   } catch (error) {
      console.log(error);
   }
}
