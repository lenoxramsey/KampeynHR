import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

const Home = React.lazy(() => import("@/components/home"));
const EmployeeDirectory = React.lazy(
  () => import("@/components/employees/EmployeeDirectory"),
);
const EmployeeEditor = React.lazy(
  () => import("@/components/employees/EmployeeEditor"),
);

export default function ProtectedRoutes() {
  return (
    <ProtectedRoute>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="dashboard" element={<Home />} />
          <Route path="employees" element={<EmployeeDirectory />} />
          <Route path="employees/new" element={<EmployeeEditor />} />
        </Routes>
      </Suspense>
    </ProtectedRoute>
  );
}
