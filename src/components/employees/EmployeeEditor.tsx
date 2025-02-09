import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EmployeeEditorProps {
  onSave?: (data: any) => void;
  initialData?: any;
}

export default function EmployeeEditor({
  onSave = () => {},
  initialData = {},
}: EmployeeEditorProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/employees/directory")}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Employee Overview
        </Button>

        <div className="grid gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-medium mb-4">Employment Details</h2>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" placeholder="N/A" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="N/A" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workAddress">Work address</Label>
                <Input
                  id="workAddress"
                  placeholder="525 20th St, San Francisco, CA, 94107"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Start date</Label>
                <Input id="startDate" type="date" placeholder="mm/dd/yyyy" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-medium mb-4">Compensation details</h2>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job title</Label>
                <Input id="jobTitle" placeholder="N/A" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employeeClassification">
                  Employee classification
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select classification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fullTime">Full-time</SelectItem>
                    <SelectItem value="partTime">Part-time</SelectItem>
                    <SelectItem value="contractor">Contractor</SelectItem>
                    <SelectItem value="intern">Intern</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
