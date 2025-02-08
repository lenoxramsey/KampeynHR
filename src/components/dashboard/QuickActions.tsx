import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlayCircle, AlertCircle, Clock, ChevronDown } from "lucide-react";

interface QuickActionsProps {
  onRunPayroll?: (type: "regular" | "emergency") => void;
  isPayrollEnabled?: boolean;
}

const QuickActions = ({
  onRunPayroll = () => {},
  isPayrollEnabled = true,
}: QuickActionsProps) => {
  return (
    <div className="w-full bg-white p-4 border rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                disabled={!isPayrollEnabled}
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Run Payroll
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onRunPayroll("regular")}>
                <Clock className="mr-2 h-4 w-4" />
                Schedule Regular Payroll
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onRunPayroll("emergency")}>
                <AlertCircle className="mr-2 h-4 w-4" />
                Emergency Payroll
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline">View Scheduled Runs</Button>
          <Button variant="outline">Payroll Settings</Button>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary">Export Reports</Button>
          <Button variant="secondary">Help Center</Button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
