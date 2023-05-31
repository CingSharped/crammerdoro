import React, {useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts";

export default function ProtectedRoute({ redirectTo }) {
    const { token } = useContext(AuthContext);

    return token ? <Outlet /> : <Navigate to={redirectTo} />;
}