import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function useUsers() {
   const [users, setUsers] = useState([]);
   const navigate = useNavigate();
   const _user_list = async () => {
      const { data } = await axios.get("https://dummyjson.com/users", {
         params: {
            limit: 100,
         },
      });
      console.log(data);
      setUsers(data?.users);
   };

   useEffect(() => {
      _user_list();
      return () => {};
   }, []);

   return { users, navigate };
}
