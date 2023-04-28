import React, { useState } from "react";
import AuthService from "../../../redux-toolkit/services/auth.service";
import { useDispatch } from "react-redux";

export default function useRegister() {
   const { _register } = new AuthService();
   const dispatch = useDispatch();
   const [formValues, setFormValues] = useState({
      email: "",
      password: "",
      c_password: "",
   });
   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues({
         ...formValues,
         [name]: value,
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(_register(formValues));
   };

   return { formValues, handleChange, handleSubmit };
}
