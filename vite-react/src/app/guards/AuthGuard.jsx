import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, Outlet as RouterOutlet, Navigate } from "react-router-dom";

// const api = {
//    loading: false,
//    user: {
//       profile: { name: "testuser" },
//       allowRoles: ["user", "admin"],
//    },
// };

export default function AuthGuard({ allowedRoles }) {
   const { location } = useLocation();
   const token = localStorage.getItem("token");
   //const { loading, user } = api;
   const { root_loading, user } = useSelector((state) => state.auth);
   useEffect(() => {
      return () => {};
   }, []);

   if (root_loading) {
      return <div>auth checking....</div>;
   } else {
      if (token && user) {
         const { allowRoles, profile } = user;
         if (allowRoles.find((role) => allowedRoles?.includes(role))) {
            if (profile?.name) {
               return <RouterOutlet />;
            } else {
               return "please create profile";
            }
         } else {
            return <p>you are unauthorized for admin page</p>;
         }
      } else {
         return <Navigate to="/auth" state={{ form: location }} replace />;
      }
   }
}
