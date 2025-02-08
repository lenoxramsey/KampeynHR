import React from "react";
import { Bell, Settings, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navigationConfig } from "./nav";
import { useState } from "react";
import EmployeeTypeModal from "../modals/EmployeeTypeModal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  userName?: string;
  userEmail?: string;
  avatarUrl?: string;
  notifications?: Array<{ id: string; title: string; message: string }>;
}

const Header = ({
  userName = "John Doe",
  userEmail = "john@example.com",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  notifications = [
    {
      id: "1",
      title: "Tax Deadline",
      message: "Quarterly taxes due next week",
    },
    { id: "2", title: "Missing Info", message: "Employee forms pending" },
  ],
}: HeaderProps) => {
  const [showEmployeeTypeModal, setShowEmployeeTypeModal] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 justify-between">
        <div className="font-semibold text-lg text-primary">HR Dashboard</div>

        <div className="flex items-center gap-6">
          {navigationConfig.map((section) =>
            section.items.map((item) => (
              <div key={item.title} className="relative group">
                {item.subItems ? (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                    {item.icon}
                    <span>{item.title}</span>
                    {item.label && (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-xs">
                        {item.label}
                      </span>
                    )}
                    <div className="hidden group-hover:block absolute top-full left-0 mt-2 bg-white rounded-md py-2 w-48 shadow-lg z-50">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.title}
                          className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-slate-50 hover:text-foreground"
                          onClick={() => {
                            if (subItem.title === "Add New Employee") {
                              setShowEmployeeTypeModal(true);
                            } else {
                              window.location.href = subItem.href;
                            }
                          }}
                        >
                          {subItem.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-2 text-sm",
                        isActive
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground",
                      )
                    }
                  >
                    {item.icon}
                    <span>{item.title}</span>
                    {item.label && (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-xs">
                        {item.label}
                      </span>
                    )}
                  </NavLink>
                )}
              </div>
            )),
          )}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="p-4">
                  <h3 className="font-medium mb-2">Notifications</h3>
                  <div className="space-y-2">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="p-2 bg-muted rounded-lg"
                      >
                        <div className="font-medium">{notification.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {notification.message}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar>
                    <AvatarImage src={avatarUrl} alt={userName} />
                    <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {userName}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {userEmail}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <EmployeeTypeModal
        open={showEmployeeTypeModal}
        onOpenChange={setShowEmployeeTypeModal}
      />
    </header>
  );
};

export default Header;
