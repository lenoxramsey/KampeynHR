import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Home from "@/components/home";
import EmployeeDirectory from "@/components/employees/EmployeeDirectory";
import EmployeeEditor from "@/components/employees/EmployeeEditor";

export default function ProtectedRoutes() {
  return (
    <ProtectedRoute>
      <Routes>
        <Route path="dashboard" element={<Home />} />
        <Route path="employees" element={<EmployeeDirectory />} />
        <Route path="employees/new" element={<EmployeeEditor />} />
      </Routes>
    </ProtectedRoute>
  );
}
