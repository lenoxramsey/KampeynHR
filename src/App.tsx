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
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <AuthProvider>
        {/* Add Tempo routes if in Tempo environment */}
        {import.meta.env.VITE_TEMPO === "true" && (
          <Routes>
            <Route path="/tempobook/*" />
          </Routes>
        )}

        {/* Main app routes */}
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/dashboard/*" element={<ProtectedRoutes />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </React.Suspense>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
