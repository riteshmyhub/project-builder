import axios from "axios";
import environment from "../../../environments/environment";
import { authLoading, isAuthenticate, loginToken, logout, rootLoading, userOnLoad } from "../slices/auth.slice";

export default class AuthService {
   _login(userObj) {
      return async (dispatch) => {
         try {
            dispatch(isAuthenticate(false));
            dispatch(authLoading(true));
            let url = environment.baseUrl + `/accounts:signInWithPassword`;
            let { data } = await axios.post(url, userObj, {
               params: {
                  key: environment.apiKey,
               },
            });
            dispatch(loginToken(data));
            dispatch(isAuthenticate(true));
            dispatch(authLoading(false));
         } catch (error) {
            dispatch(authLoading(false));
            dispatch(isAuthenticate(false));
         }
      };
   }

   _user_on_load() {
      return async (dispatch) => {
         console.log("www");
         try {
            dispatch(rootLoading(true));
            dispatch(isAuthenticate(false));
            let url = environment.baseUrl + `/accounts:lookup`;
            let token = { idToken: localStorage.getItem("token") };
            let { data } = await axios.post(url, token, {
               params: {
                  key: environment.apiKey,
               },
            });
            dispatch(userOnLoad(data));
            dispatch(rootLoading(false));
            dispatch(isAuthenticate(true));
         } catch (error) {
            dispatch(rootLoading(false));
            dispatch(isAuthenticate(false));
            if (error.response.data.error.message === "INVALID_ID_TOKEN") {
               localStorage.clear();
            }
         }
      };
   }

   _logout() {
      return async (dispatch) => {
         dispatch(logout());
      };
   }
   _register(userObj) {
      return async (dispatch) => {
         try {
            dispatch(isAuthenticate(false));
            dispatch(authLoading(true));
            let url = environment.baseUrl + `/accounts:signUp`;
            let { data } = await axios.post(url, userObj, {
               params: {
                  key: environment.apiKey,
               },
            });
            console.log(data);
            dispatch(isAuthenticate(false));
            dispatch(authLoading(false));
         } catch (error) {
            console.log(error);
            dispatch(authLoading(false));
            dispatch(isAuthenticate(false));
         }
      };
   }
}
