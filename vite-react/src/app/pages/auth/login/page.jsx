import React from "react";
import useLogin from "./useLogin";
import { NavLink } from "react-router-dom";

export default function Login() {
   const { formValues, handleChange, handleSubmit, loading } = useLogin();
   return (
      <div className="h-100 center-xy">
         <div className="w-100">
            <div className="card mx-auto" style={{ maxWidth: "550px" }}>
               <form onSubmit={handleSubmit}>
                  <h2 className="text-center">Login</h2>
                  <div style={{ minHeight: "70px" }}>
                     <label htmlFor="email">email</label>
                     <input type="text" id="email" name="email" value={formValues.email} onChange={handleChange} />
                  </div>
                  <div style={{ minHeight: "70px" }}>
                     <label htmlFor="password">password</label>
                     <input type="text" id="password" name="password" value={formValues.password} onChange={handleChange} required />
                  </div>
                  <button type="submit">
                     {loading ? "loading..." : "submit"}
                  </button>
                  <span className="link">
                     Not registered yet?
                     <span className="underline">
                        <NavLink to="../register">Create an Acconunt</NavLink>
                     </span>
                  </span>
               </form>
            </div>
         </div>
      </div>
   );
}
