import React from 'react';

interface SideBarProps {
  title: string;
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ title, children }) => {
  return (
    <aside className="bg-gray-50 rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2">{title}</h2>
      <div>{children}</div>
    </aside>
  );
};

export default SideBar;