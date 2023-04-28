import React from "react";
import useRegister from "./useRegister";

export default function Register() {
   const { formValues, handleChange, handleSubmit } = useRegister();
   return (
      <div className="h-100 center-xy">
         <div className="w-100">
            <div className="card mx-auto" style={{ maxWidth: "550px" }}>
               <form onSubmit={handleSubmit}>
                  <h2 className="text-center">Register</h2>
                  <div style={{ minHeight: "70px" }}>
                     <label htmlFor="email" className="d-block">
                        email
                     </label>
                     <input type="text" id="email" name="email" value={formValues.email} onChange={handleChange} />
                  </div>
                  <div style={{ minHeight: "70px" }}>
                     <label htmlFor="password" className="d-block">
                        password
                     </label>
                     <input type="text" id="password" name="password" value={formValues.password} onChange={handleChange} />
                  </div>
                  <div style={{ minHeight: "70px" }}>
                     <label htmlFor="c_password" className="d-block">
                        confirm password
                     </label>
                     <input //
                        type="text"
                        id="c_password"
                        name="c_password"
                        value={formValues.c_password}
                        onChange={handleChange}
                     />
                  </div>
                  <button type="submit">submit</button>
               </form>
            </div>
         </div>
      </div>
   );
}
