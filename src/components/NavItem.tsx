import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  link: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const NavItem = ({ label, link, icon, onClick }: NavItemProps) => {
  return (
    <NavLink
      to={link}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
          isActive ? "bg-gray-100 text-primary" : "text-slate-500"
        }`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
};

export default NavItem;
