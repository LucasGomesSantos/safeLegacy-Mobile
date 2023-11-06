import { useEffect } from "react";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../context";

export default function Routes() {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <AuthRoutes /> : <AppRoutes />
}
