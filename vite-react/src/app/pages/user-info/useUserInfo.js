import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function useUserInfo() {
   const [userInfo, setUserInfo] = useState({});
   const { id } = useParams();
   const _get_user_info = async (id) => {
      const { data } = await axios.get(`https://dummyjson.com/users/${id}`);
      setUserInfo(data);
   };
   useEffect(() => {
      if (id) {
         _get_user_info(id);
      }
      return () => {};
   }, [id]);

   return { userInfo };
}


