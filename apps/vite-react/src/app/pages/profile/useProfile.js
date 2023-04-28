import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function useProfile() {
   const { user } = useSelector((state) => state.auth);
   return { user };
}
