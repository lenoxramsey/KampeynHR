import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Users, Calendar, CheckSquare, DollarSign } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
}

const MetricCard = ({
  title = "Metric",
  value = "0",
  icon,
  description,
}: MetricCardProps) => {
  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-card-foreground">
          {title}
        </CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-card-foreground">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

interface MetricsGridProps {
  metrics?: {
    totalEmployees: number;
    nextPayDate: string;
    pendingTasks: number;
    lastPayrollAmount: string;
  };
}

export default function MetricsGrid({
  metrics = {
    totalEmployees: 125,
    nextPayDate: "2024-04-15",
    pendingTasks: 8,
    lastPayrollAmount: "$45,250",
  },
}: MetricsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4 bg-muted/50 rounded-lg">
      <MetricCard
        title="Total Employees"
        value={metrics.totalEmployees.toString()}
        icon={<Users className="h-4 w-4" />}
      />
      <MetricCard
        title="Next Pay Date"
        value={metrics.nextPayDate}
        icon={<Calendar className="h-4 w-4" />}
        description="Upcoming payroll date"
      />
      <MetricCard
        title="Pending Tasks"
        value={metrics.pendingTasks.toString()}
        icon={<CheckSquare className="h-4 w-4" />}
        description="Tasks requiring attention"
      />
      <MetricCard
        title="Last Payroll"
        value={metrics.lastPayrollAmount}
        icon={<DollarSign className="h-4 w-4" />}
        description="Previous pay period"
      />
    </div>
  );
}
