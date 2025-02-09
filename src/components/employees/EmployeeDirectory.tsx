import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  startDate: string;
  jobTitle: string;
}

interface EmployeeDirectoryProps {
  employees?: Employee[];
}

export default function EmployeeDirectory({
  employees = [],
}: EmployeeDirectoryProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-foreground">Employees</h1>
          <Button onClick={() => navigate("/employees/new")}>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Employee
          </Button>
        </div>

        {employees.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <Users className="h-12 w-12 text-muted-foreground" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">No employees yet</h3>
                <p className="text-sm text-muted-foreground">
                  Add your first employee to get started
                </p>
              </div>
              <Button onClick={() => navigate("/employees/new")}>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Employee
              </Button>
            </div>
          </Card>
        ) : (
          <Card>
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                      Name
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                      Email
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                      Department
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                      Job Title
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                      Start Date
                    </th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {employees.map((employee) => (
                    <tr
                      key={employee.id}
                      className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    >
                      <td className="p-4 align-middle">{employee.name}</td>
                      <td className="p-4 align-middle">{employee.email}</td>
                      <td className="p-4 align-middle">
                        {employee.department}
                      </td>
                      <td className="p-4 align-middle">{employee.jobTitle}</td>
                      <td className="p-4 align-middle">{employee.startDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
