import { Navigate, Route, Routes, Outlet as RouterOutlet, useParams } from "react-router-dom";
import Login from "../pages/auth/login/page";
import Register from "../pages/auth/register/page";
import Home from "../pages/home/page";
import NotFound from "../pages/404/page";
import Admin from "../pages/admin/page";
import Profile from "../pages/profile/page";
import AuthGuard from "../guards/AuthGuard";
import Users from "../pages/users/page";
import UserInfo from "../pages/user-info/page";

export default function PageRoutes() {
   return (
      <Routes>
         <Route path="auth" element={<RouterOutlet />} caseSensitive>
            <Route index element={<Navigate to="login" replace />} caseSensitive />
            <Route path="login" element={<Login />} caseSensitive />
            <Route path="register" element={<Register />} caseSensitive />
         </Route>

         {/* home */}
         <Route path="/" element={<Home />} caseSensitive />
         <Route path="users" element={<Users />} caseSensitive />
         <Route path="users/:id" element={<UserInfo />} caseSensitive />

         {/* dashboard: (user) and also (user) */}
         <Route element={<AuthGuard allowedRoles={["user", "admin"]} />}>
            <Route path="dashboard" element={<RouterOutlet />} caseSensitive>
               <Route index element={<Navigate to="profile" replace />} caseSensitive />
               <Route path="profile" element={<Profile />} caseSensitive />
            </Route>
         </Route>

         {/* only for (admin) */}
         <Route element={<AuthGuard allowedRoles={["admin"]} />}>
            <Route path="admin" element={<Admin />} caseSensitive />
         </Route>

         {/* 404 */}
         <Route path="*" element={<NotFound />} caseSensitive />
      </Routes>
   );
}
