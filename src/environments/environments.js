import axios from "axios";

export const http = axios.create({
   baseURL: "https://api.github.com/repos/riteshmyhub/cli-source-code/contents/projects",
});
