import React from "react";

import Header from "./layout/Header";
import MetricsGrid from "./dashboard/MetricsGrid";
import NotificationCenter from "./notifications/NotificationCenter";
import EmployeeWizard from "./onboarding/EmployeeWizard";

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
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col">
          <Header
            userName={userName}
            userEmail={userEmail}
            notifications={notifications}
          />
          <main className="flex-1 overflow-auto p-6 space-y-6">
            <MetricsGrid metrics={metrics} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column for recent activity */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-4">
                    Recent Activity
                  </h2>
                  <div className="space-y-4">
                    {/* Placeholder for recent activity items */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="p-4 border rounded-lg flex items-center space-x-4"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <div>
                          <p className="font-medium">Activity {i + 1}</p>
                          <p className="text-sm text-gray-500">
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
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-4">
                    Upcoming Events
                  </h2>
                  <div className="space-y-4">
                    {/* Placeholder for upcoming events */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="p-4 border rounded-lg flex items-center space-x-4"
                      >
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-medium">
                            {new Date(
                              Date.now() + i * 24 * 60 * 60 * 1000,
                            ).getDate()}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">Event {i + 1}</p>
                          <p className="text-sm text-gray-500">
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

      {showOnboarding && <EmployeeWizard />}
    </div>
  );
}
