import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { navigationConfig } from "./nav";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { useState } from "react";
import EmployeeTypeModal from "../modals/EmployeeTypeModal";

export default function Sidebar({ className = "" }) {
  const [showEmployeeTypeModal, setShowEmployeeTypeModal] = useState(false);
  return (
    <nav
      className={cn(
        "w-[280px] h-screen bg-slate-900 text-white flex flex-col overflow-y-auto",
        className,
      )}
      aria-label="Main navigation"
    >
      <div className="p-6">
        <h1 className="text-xl font-semibold">HR Dashboard</h1>
      </div>

      <div className="flex-1 px-3">
        {navigationConfig.map((section, i) => (
          <div key={i} className="mb-6">
            {section.title && (
              <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-slate-400 uppercase">
                {section.title}
              </h2>
            )}
            <div className="space-y-1">
              {section.items.map((item, j) => (
                <div key={j} className="relative group w-full">
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center w-full rounded-md px-3 py-2 text-sm hover:bg-slate-800/50 transition-colors gap-3",
                        isActive
                          ? "bg-slate-800 text-slate-100 font-medium"
                          : "text-slate-400 hover:text-slate-100",
                        item.subItems ? "cursor-default" : "",
                      )
                    }
                    onClick={(e) => {
                      if (item.subItems) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {item.icon}
                    <span className="flex-1 truncate">{item.title}</span>
                    {item.label && (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-xs shrink-0">
                        {item.label}
                      </span>
                    )}
                  </NavLink>
                  {item.subItems && (
                    <div className="invisible group-hover:visible absolute left-full top-0 ml-1 bg-slate-900 rounded-md py-2 w-48 shadow-lg z-50">
                      {item.subItems.map((subItem, k) => (
                        <button
                          key={k}
                          className="w-full text-left px-4 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-slate-100"
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
                  )}
                </div>
              ))}
            </div>
            {i < navigationConfig.length - 1 && (
              <Separator className="my-6 bg-slate-800/50" />
            )}
          </div>
        ))}
      </div>
      <EmployeeTypeModal
        open={showEmployeeTypeModal}
        onOpenChange={setShowEmployeeTypeModal}
      />
    </nav>
  );
}
