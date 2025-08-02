import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  subtitleColor?: string;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, subtitle, subtitleColor = 'text-gray-300', icon }: StatCardProps) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm p-4 rounded-2xl text-white shadow-lg flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-200">{title}</p>
          {icon}
        </div>
        <p className="text-4xl font-bold">{value}</p>
      </div>
      <p className={`text-xs ${subtitleColor} mt-1`}>{subtitle}</p>
    </div>
  );
};

export default StatCard;