export interface NavItem {
  title: string;
  href: string;
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
        href: "/dashboard",
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Employees",
        href: "/employees",
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
