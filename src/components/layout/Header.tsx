import React from "react";
import { Settings, User, HelpCircle } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavLink } from "react-router-dom";
import { navigationConfig } from "./nav";
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
}

const Header = ({
  userName = "John Doe",
  userEmail = "john@example.com",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 justify-between">
        <div className="font-semibold text-lg text-primary">HR Dashboard</div>

        <div className="flex items-center gap-6">
          {navigationConfig.map((section) =>
            section.items.map((item) => (
              <div key={item.title} className="relative group">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "text-base transition-colors hover:text-foreground flex items-center gap-1",
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground",
                    )
                  }
                >
                  {item.title}
                </NavLink>
                {item.subItems && (
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 bg-popover rounded-md py-2 w-48 shadow-lg z-50">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.title}
                        to={subItem.href}
                        className={({ isActive }) =>
                          cn(
                            "block w-full text-left px-4 py-2 text-sm hover:bg-muted",
                            isActive
                              ? "text-foreground font-medium bg-muted"
                              : "text-muted-foreground",
                          )
                        }
                      >
                        {subItem.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )),
          )}

          <div className="flex items-center gap-4">
            <ThemeToggle />

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
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Help & Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
