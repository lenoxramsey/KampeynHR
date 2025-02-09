import React, { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import routes from "tempo-routes";

const Home = React.lazy(() => import("./components/home"));
const EmployeeEditor = React.lazy(
  () => import("./components/employees/EmployeeEditor"),
);
const EmployeeDirectory = React.lazy(
  () => import("./components/employees/EmployeeDirectory"),
);

import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Suspense fallback={<LoadingSpinner />}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees/new" element={<EmployeeEditor />} />
            <Route
              path="/employees/directory"
              element={<EmployeeDirectory />}
            />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
