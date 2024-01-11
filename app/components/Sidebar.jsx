import Link from "next/link";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="list">
        <li className="list-item">
          <Link href="/dashboard/list">CRYPTO LIST</Link>
        </li>
        <li className="list-item">
          <Link href="/dashboard/trades">TRADES</Link>
        </li>
        <li className="list-item">
          <Link href="/dashboard/settings">SETTINGS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
