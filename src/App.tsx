import React, { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import routes from "tempo-routes";

const Landing = React.lazy(() => import("./pages/Landing"));
const AuthRoutes = React.lazy(() => import("./components/auth/AuthRoutes"));
const ProtectedRoutes = React.lazy(
  () => import("./components/auth/ProtectedRoutes"),
);

import { ThemeProvider } from "./components/theme-provider";
import { AuthProvider } from "./lib/auth.tsx";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // Handle Tempo routes first
  const tempoRouting =
    import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;

  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <AuthProvider>
        {tempoRouting}
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="/auth/*"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <AuthRoutes />
              </Suspense>
            }
          />
          <Route
            path="/*"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ProtectedRoutes />
              </Suspense>
            }
          />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
