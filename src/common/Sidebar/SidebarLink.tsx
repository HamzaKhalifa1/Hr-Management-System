import { NavLink } from "react-router-dom";
import styles from "./SidebarLink.module.css";
import React, { ReactElement } from "react";

interface SidebarLinkProps {
  to: string;
  icon: ReactElement<{ filled?: string }>;
  label: string;
}

export default function SidebarLink({ to, icon, label }: SidebarLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
      }
    >
      {({ isActive }) => (
        <>
          <span className={isActive ? styles.borderActive : styles.border}></span>
          {React.cloneElement(icon, { filled: isActive ? "currentColor" : "none" })}
          <p className={isActive ? styles.nameActive : styles.name}>{label}</p>
        </>
      )}
    </NavLink>
  );
}
