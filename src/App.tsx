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
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <AuthProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/auth/*" element={<AuthRoutes />} />
              <Route path="/*" element={<ProtectedRoutes />} />
            </Routes>
            {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          </>
        </Suspense>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
