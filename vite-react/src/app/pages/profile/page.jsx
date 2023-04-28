import React from "react";
import useProfile from "./useProfile";

export default function Profile() {
   const { user } = useProfile();
   return (
      <div>
         <h4>{JSON.stringify(user)}</h4>
      </div>
   );
}
