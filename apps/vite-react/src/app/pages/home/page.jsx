import React from "react";
import useHome from "./useHome";

export default function Home() {
   const { text } = useHome();
   return <div>{text}</div>;
}
