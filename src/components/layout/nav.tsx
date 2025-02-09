export interface NavItem {
  title: string;
  href: string;
  subItems?: Array<{
    title: string;
    href: string;
  }>;
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
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Employees",
        href: "#",
        subItems: [
          {
            title: "Add New Employee",
            href: "/employees/new",
            icon: "UserPlus",
          },
          {
            title: "View All Employees",
            href: "/employees",
            icon: "Users",
          },
        ],
      },
      {
        title: "Payroll",
        href: "/payroll",
      },
      {
        title: "Taxes",
        href: "/taxes",
      },
      {
        title: "Reports",
        href: "/reports",
      },
    ],
  },
];
