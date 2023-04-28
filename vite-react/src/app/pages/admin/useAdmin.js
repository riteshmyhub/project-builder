import React, { useState } from "react";

export default function useAdmin() {
   const [text, setText] = useState("Admin page work!");
   return { text };
}
