import React from "react";
import useAdmin from "./useAdmin";

export default function Admin() {
   const { text } = useAdmin();
   return <div>{text}</div>;
}
