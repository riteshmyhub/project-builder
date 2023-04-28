import React, { useEffect } from "react";
import PageRoutes from "./routes/routes";
import Navbar from "./shared/components/Navbar";
import AuthService from "./redux-toolkit/services/auth.service";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
   const { _user_on_load } = new AuthService();
   const { root_loading } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(_user_on_load());
      console.log("isAuthenticate...");
      return () => {};
   }, []);

   return root_loading ? (
      "loading..."
   ) : (
      <>
         <Navbar />
         <div style={{ height: "calc(100vh - 62px)", overflowY: "scroll" }}>
            <PageRoutes />
         </div>
      </>
   );
}
