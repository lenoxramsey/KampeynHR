import React, { Suspense } from "react";
import { LoadingSpinner } from "./ui/loading-spinner";

const Header = React.lazy(() => import("./layout/Header"));
const MetricsGrid = React.lazy(() => import("./dashboard/MetricsGrid"));
const NotificationCenter = React.lazy(
  () => import("./notifications/NotificationCenter"),
);
const EmployeeWizard = React.lazy(() => import("./onboarding/EmployeeWizard"));

interface HomeProps {
  userName?: string;
  userEmail?: string;
  metrics?: {
    totalEmployees: number;
    nextPayDate: string;
    pendingTasks: number;
    lastPayrollAmount: string;
  };
  notifications?: Array<{
    id: string;
    title: string;
    message: string;
  }>;
  showOnboarding?: boolean;
}

import { usePageTitle } from "@/utils/usePageTitle";

export default function Home({
  userName = "John Doe",
  userEmail = "john@example.com",
  metrics = {
    totalEmployees: 125,
    nextPayDate: "2024-04-15",
    pendingTasks: 8,
    lastPayrollAmount: "$45,250",
  },
  notifications = [
    {
      id: "1",
      title: "Tax Deadline",
      message: "Quarterly taxes due next week",
    },
    { id: "2", title: "Missing Info", message: "Employee forms pending" },
  ],
  showOnboarding = false,
}: HomeProps) {
  usePageTitle("Dashboard");

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col">
          <Suspense fallback={<LoadingSpinner />}>
            <Header
              userName={userName}
              userEmail={userEmail}
              notifications={notifications}
            />
          </Suspense>
          <main className="flex-1 overflow-auto p-6 space-y-6">
            <Suspense fallback={<LoadingSpinner />}>
              <MetricsGrid metrics={metrics} />
            </Suspense>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column for recent activity */}
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-sm border">
                  <h2 className="text-xl font-semibold mb-4 text-card-foreground">
                    Recent Activity
                  </h2>
                  <div className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="p-4 border rounded-lg flex items-center space-x-4 bg-background"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <div>
                          <p className="font-medium text-foreground">
                            Activity {i + 1}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column for upcoming events */}
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-sm border">
                  <h2 className="text-xl font-semibold mb-4 text-card-foreground">
                    Upcoming Events
                  </h2>
                  <div className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="p-4 border rounded-lg flex items-center space-x-4 bg-background"
                      >
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                          <span className="text-sm font-medium text-muted-foreground">
                            {new Date(
                              Date.now() + i * 24 * 60 * 60 * 1000,
                            ).getDate()}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            Event {i + 1}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Upcoming deadline or event
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {showOnboarding && (
        <Suspense fallback={<LoadingSpinner />}>
          <EmployeeWizard />
        </Suspense>
      )}
    </div>
  );
}
