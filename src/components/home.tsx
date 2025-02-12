import React, { Suspense } from "react";
import { LoadingSpinner } from "./ui/loading-spinner";
import Header from "./layout/Header";
import MetricsGrid from "./dashboard/MetricsGrid";
import NotificationCenter from "./notifications/NotificationCenter";
import EmployeeWizard from "./onboarding/EmployeeWizard";
import { usePageTitle } from "@/utils/usePageTitle";

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

import { useAuth } from "@/lib/auth";

export default function Home({
  userName,
  userEmail,
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
  const { user, profile } = useAuth();

  // Use auth data if props are not provided
  const displayName = userName || profile?.first_name || user?.email || "User";
  const displayEmail = userEmail || user?.email || "";

  return (
    <div className="min-h-screen bg-background">
      <Header userName={displayName} userEmail={displayEmail} />
      <main className="container mx-auto p-6 space-y-6">
        <MetricsGrid metrics={metrics} />

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

      {showOnboarding && <EmployeeWizard />}
    </div>
  );
}
