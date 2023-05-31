import React, {useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts";

export default function ProtectedRoute({ redirectTo }) {
    const { user } = useContext(AuthContext);

    return user ? <Outlet /> : <Navigate to={redirectTo} />;
}