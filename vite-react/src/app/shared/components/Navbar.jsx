import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthService from "../../redux-toolkit/services/auth.service";

export default function Navbar() {
   const { loading, user } = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { _logout } = new AuthService();
   const [toggle, setToggle] = useState(false);
   const logout = () => {
      dispatch(_logout());
      navigate("/auth", { replace: true });
   };

   return (
      <>
         <nav>
            <ul className="logo-side-nav">
               <li>
                  <div className="logo">logo</div>
               </li>
            </ul>
            <ul className="hamburger-menu">
               <li>
                  <button onClick={() => setToggle(!toggle)}>button</button>
               </li>
            </ul>
            <ul className={`side-nav${toggle ? " open" : ""}`}>
               <li>
                  <NavLink to="/">home</NavLink>
               </li>
               <li>
                  <NavLink to="users">users</NavLink>
               </li>
               {user ? (
                  <>
                     <li>
                        <NavLink to="dashboard">dashboard</NavLink>
                     </li>
                     <li>
                        <NavLink to="admin">admin</NavLink>
                     </li>
                     <li>
                        <button onClick={logout}>logout</button>
                     </li>
                  </>
               ) : (
                  <>
                     <li>
                        <button onClick={() => navigate("/auth")}>login</button>
                     </li>
                  </>
               )}
            </ul>
         </nav>
      </>
   );
}
