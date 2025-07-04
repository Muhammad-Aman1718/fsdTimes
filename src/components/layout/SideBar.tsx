import React from "react";

interface SideBarProps {
  title: string;
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ title, children }) => {
  return <div>SideBar</div>;
};

export default SideBar;
