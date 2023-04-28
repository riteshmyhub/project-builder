import React, { useEffect, useState } from "react";
import AuthService from "../../../redux-toolkit/services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function useLogin() {
   const { _login, _user_on_load } = new AuthService();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { loading, isAuthenticate } = useSelector((state) => state.auth);
   const [formValues, setFormValues] = useState({
      email: "",
      password: "",
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
      dispatch(_login(formValues));
   };

   useEffect(() => {
      if (isAuthenticate) {
         navigate("/", { replace: true });
         dispatch(_user_on_load());
      }
      return () => {};
   }, [isAuthenticate]);

   return { formValues, handleChange, handleSubmit, loading };
}
