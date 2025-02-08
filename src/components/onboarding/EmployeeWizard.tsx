import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Upload, UserCircle, FileText, CheckCircle } from "lucide-react";

interface EmployeeWizardProps {
  onComplete?: (data: any) => void;
  initialStep?: number;
  isOpen?: boolean;
}

const EmployeeWizard = ({
  onComplete = () => {},
  initialStep = 0,
  isOpen = true,
}: EmployeeWizardProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const steps = ["Basic Info", "Documents", "Tax Forms", "Review"];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete({});
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Employee Onboarding
        </h2>
        <Progress value={progress} className="w-full" />
        <div className="flex justify-between mt-2">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`flex items-center ${index <= currentStep ? "text-blue-600" : "text-gray-400"}`}
            >
              <span className="text-sm">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <Tabs value={currentStep.toString()} className="w-full">
        <TabsContent value="0">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <UserCircle className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold">Basic Information</h3>
              </div>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 555-5555" />
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="1">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <Upload className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold">Document Upload</h3>
              </div>
              <div className="grid gap-6">
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">
                    Drag and drop files here or click to browse
                  </p>
                  <Button variant="outline" className="mt-4">
                    Upload Files
                  </Button>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Required Documents:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    <li>Government ID</li>
                    <li>Proof of Address</li>
                    <li>Social Security Card</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="2">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold">Tax Forms</h3>
              </div>
              <div className="grid gap-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">W-4 Form</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Federal Tax Withholding Form
                  </p>
                  <Button variant="outline">Complete W-4</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">State Tax Form</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    State Tax Withholding Form
                  </p>
                  <Button variant="outline">Complete State Form</Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="3">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold">Review & Submit</h3>
              </div>
              <div className="space-y-6">
                <div className="grid gap-4">
                  <h4 className="font-medium">Personal Information</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Name</p>
                      <p>John Doe</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Email</p>
                      <p>john.doe@example.com</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <h4 className="font-medium">Document Status</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-green-600">
                      ✓ All required documents uploaded
                    </p>
                    <p className="text-green-600">✓ Tax forms completed</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </Button>
        <Button onClick={handleNext}>
          {currentStep === steps.length - 1 ? "Complete" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default EmployeeWizard;
