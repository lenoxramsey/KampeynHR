import React from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import routes from "tempo-routes";

const Landing = React.lazy(() => import("./pages/Landing"));
const AuthRoutes = React.lazy(() => import("./components/auth/AuthRoutes"));
const ProtectedRoutes = React.lazy(
  () => import("./components/auth/ProtectedRoutes"),
);

import { ThemeProvider } from "./components/theme-provider";
import { AuthProvider } from "./lib/auth.tsx";

function App() {
  // Handle Tempo routes first
  const tempoRouting =
    import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;

  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <AuthProvider>
        {tempoRouting}
        <React.Suspense>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={<ProtectedRoutes />} />
          </Routes>
        </React.Suspense>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
