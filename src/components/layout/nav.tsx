import {
  Users,
  Calculator,
  FileText,
  BarChart3,
  Home,
  Settings,
  HelpCircle,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  label?: string;
}

export interface NavSection {
  title?: string;
  items: NavItem[];
}

export const navigationConfig: NavSection[] = [
  {
    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: <Home className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Employees",
        href: "/employees",
        icon: <Users className="w-5 h-5" />,
        label: "12",
        subItems: [
          {
            title: "Add New Employee",
            href: "/employees/new",
          },
          {
            title: "View All Employees",
            href: "/employees",
          },
        ],
      },
      {
        title: "Payroll",
        href: "/payroll",
        icon: <Calculator className="w-5 h-5" />,
      },
      {
        title: "Taxes",
        href: "/taxes",
        icon: <FileText className="w-5 h-5" />,
      },
      {
        title: "Reports",
        href: "/reports",
        icon: <BarChart3 className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Settings & Support",
    items: [
      {
        title: "Settings",
        href: "/settings",
        icon: <Settings className="w-5 h-5" />,
      },
      {
        title: "Help & Support",
        href: "/support",
        icon: <HelpCircle className="w-5 h-5" />,
      },
    ],
  },
];
