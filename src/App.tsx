import React, { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import routes from "tempo-routes";

const Landing = React.lazy(() => import("./pages/Landing"));
const SignIn = React.lazy(() => import("./pages/auth/SignIn"));
const SignUp = React.lazy(() => import("./pages/auth/SignUp"));
const ForgotPassword = React.lazy(() => import("./pages/auth/ForgotPassword"));
const Home = React.lazy(() => import("./components/home"));
const EmployeeEditor = React.lazy(
  () => import("./components/employees/EmployeeEditor"),
);
const EmployeeDirectory = React.lazy(
  () => import("./components/employees/EmployeeDirectory"),
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
              <Route path="/auth/sign-in" element={<SignIn />} />
              <Route path="/auth/sign-up" element={<SignUp />} />
              <Route
                path="/auth/forgot-password"
                element={<ForgotPassword />}
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/employees"
                element={
                  <ProtectedRoute>
                    <EmployeeDirectory />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/employees/new"
                element={
                  <ProtectedRoute>
                    <EmployeeEditor />
                  </ProtectedRoute>
                }
              />
            </Routes>
            {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          </>
        </Suspense>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
