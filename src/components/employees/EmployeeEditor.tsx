import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Save, Edit, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface EmployeeEditorProps {
  onSave?: (data: any) => void;
  initialData?: any;
  isEditing?: boolean;
}

import { usePageTitle } from "@/utils/usePageTitle";

export default function EmployeeEditor({
  onSave = () => {},
  initialData = {},
  isEditing = false,
}: EmployeeEditorProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");
  const [editing, setEditing] = useState(isEditing);

  const tabs = [
    { id: "details", label: "Employee Details" },
    { id: "compensation", label: "Compensation" },
    { id: "benefits", label: "Benefits" },
    { id: "terminate", label: "Terminate" },
  ];

  usePageTitle("Edit Employee");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto py-6">
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={() => navigate("/employees")}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Employee Overview
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setEditing(!editing)}>
              {editing ? (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </>
              ) : (
                <>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </>
              )}
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Terminate
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action will terminate the employee's employment. This
                    action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-destructive text-destructive-foreground">
                    Terminate Employment
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-48 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === tab.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1">
            {activeTab === "details" && (
              <Card className="p-6">
                <h2 className="text-lg font-medium mb-4">Employee Details</h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input
                      id="department"
                      placeholder="N/A"
                      disabled={!editing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="N/A"
                      disabled={!editing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workAddress">Work address</Label>
                    <Input
                      id="workAddress"
                      placeholder="525 20th St, San Francisco, CA, 94107"
                      disabled={!editing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      placeholder="mm/dd/yyyy"
                      disabled={!editing}
                    />
                  </div>
                </div>
              </Card>
            )}

            {activeTab === "compensation" && (
              <Card className="p-6">
                <h2 className="text-lg font-medium mb-4">
                  Compensation Details
                </h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job title</Label>
                    <Input
                      id="jobTitle"
                      placeholder="N/A"
                      disabled={!editing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salary">Base Salary</Label>
                    <Input
                      id="salary"
                      type="number"
                      placeholder="Enter amount"
                      disabled={!editing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employeeClassification">
                      Employee classification
                    </Label>
                    <Select disabled={!editing}>
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
            )}

            {activeTab === "benefits" && (
              <Card className="p-6">
                <h2 className="text-lg font-medium mb-4">Benefits</h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="healthPlan">Health Insurance Plan</Label>
                    <Select disabled={!editing}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic Plan</SelectItem>
                        <SelectItem value="standard">Standard Plan</SelectItem>
                        <SelectItem value="premium">Premium Plan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="401k">401(k) Contribution</Label>
                    <Input
                      id="401k"
                      type="number"
                      placeholder="Enter percentage"
                      disabled={!editing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pto">PTO Days</Label>
                    <Input
                      id="pto"
                      type="number"
                      placeholder="Enter days"
                      disabled={!editing}
                    />
                  </div>
                </div>
              </Card>
            )}

            {activeTab === "terminate" && (
              <Card className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-destructive">
                    <AlertTriangle className="h-12 w-12" />
                    <div>
                      <h2 className="text-lg font-medium">
                        Terminate Employment
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        This action will terminate the employee's employment and
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="terminationDate">Termination Date</Label>
                      <Input
                        id="terminationDate"
                        type="date"
                        disabled={!editing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="terminationReason">
                        Reason for Termination
                      </Label>
                      <Select disabled={!editing}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select reason" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="voluntary">
                            Voluntary Resignation
                          </SelectItem>
                          <SelectItem value="performance">
                            Performance
                          </SelectItem>
                          <SelectItem value="layoff">Layoff</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
