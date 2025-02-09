import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface EmployeeEditorProps {
  onSave?: (data: any) => void;
  initialData?: any;
}

export default function EmployeeEditor({
  onSave = () => {},
  initialData = {},
}: EmployeeEditorProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-foreground">
            Add New Employee
          </h1>
          <div className="space-x-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save Employee</Button>
          </div>
        </div>

        <div className="grid gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-medium mb-4">Personal Information</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter last name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-medium mb-4">Employment Details</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" placeholder="Enter department" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input id="position" placeholder="Enter position" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employeeType">Employee Type</Label>
                <Input id="employeeType" placeholder="Enter employee type" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-medium mb-4">Compensation</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="salary">Annual Salary</Label>
                <Input id="salary" placeholder="Enter annual salary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="payType">Pay Type</Label>
                <Input id="payType" placeholder="Enter pay type" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
