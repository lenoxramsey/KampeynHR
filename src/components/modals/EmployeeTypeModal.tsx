import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { UserCircle, Users } from "lucide-react";

interface EmployeeTypeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EmployeeTypeModal({
  open,
  onOpenChange,
}: EmployeeTypeModalProps) {
  const navigate = useNavigate();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Select Employee Type</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 p-4">
          <Card
            className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
            onClick={() => {
              onOpenChange(false);
              navigate("/employees/new/w2");
            }}
          >
            <UserCircle className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-lg font-semibold mb-2">W2 Employee</h3>
            <p className="text-sm text-gray-500">
              Full-time or part-time employees with standard tax withholdings
            </p>
          </Card>

          <Card
            className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
            onClick={() => {
              onOpenChange(false);
              navigate("/employees/new/1099");
            }}
          >
            <Users className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-lg font-semibold mb-2">1099 Contractor</h3>
            <p className="text-sm text-gray-500">
              Independent contractors responsible for their own tax payments
            </p>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
