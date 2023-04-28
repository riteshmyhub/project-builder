import React, { useState } from "react";

export default function useHome() {
   const [text, setText] = useState("Home page work!");
   return { text };
}
