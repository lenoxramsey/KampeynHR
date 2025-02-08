import React from "react";
import { Bell, Calendar, FileWarning, AlertCircle, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface NotificationItem {
  id: string;
  type: "tax" | "missing" | "approval";
  title: string;
  description: string;
  date: string;
  read: boolean;
}

interface NotificationCenterProps {
  notifications?: NotificationItem[];
  onDismiss?: (id: string) => void;
  onClearAll?: () => void;
}

const defaultNotifications: NotificationItem[] = [
  {
    id: "1",
    type: "tax",
    title: "Q1 Tax Filing Deadline",
    description: "Quarterly tax filing deadline approaching in 5 days",
    date: "2024-03-25",
    read: false,
  },
  {
    id: "2",
    type: "missing",
    title: "Missing W-4 Form",
    description: "Employee John Doe has not submitted W-4 form",
    date: "2024-03-24",
    read: false,
  },
  {
    id: "3",
    type: "approval",
    title: "Payroll Approval Required",
    description: "March 15th payroll run needs your approval",
    date: "2024-03-23",
    read: true,
  },
];

const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications = defaultNotifications,
  onDismiss = () => {},
  onClearAll = () => {},
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "tax":
        return <Calendar className="h-5 w-5 text-blue-500" />;
      case "missing":
        return <FileWarning className="h-5 w-5 text-yellow-500" />;
      case "approval":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <Card className="w-[400px] bg-white shadow-lg">
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-gray-500" />
          <h2 className="text-lg font-semibold">Notifications</h2>
          <Badge variant="secondary" className="ml-2">
            {notifications.filter((n) => !n.read).length}
          </Badge>
        </div>
        <Button variant="ghost" size="sm" onClick={onClearAll}>
          Clear all
        </Button>
      </div>

      <ScrollArea className="h-[500px]">
        <div className="p-4 space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="relative">
              <div
                className={`p-4 rounded-lg ${notification.read ? "bg-gray-50" : "bg-blue-50"}`}
              >
                <div className="flex items-start gap-3">
                  {getIcon(notification.type)}
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">
                      {notification.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {notification.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {notification.date}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => onDismiss(notification.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {notifications.indexOf(notification) !==
                notifications.length - 1 && <Separator className="my-2" />}
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default NotificationCenter;
