import React from 'react';
import { MessageSquare, Bell, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-4 text-white">
      <div className="flex items-center space-x-3">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop"
          alt="User Avatar"
          className="w-12 h-12 rounded-full border-2 border-white object-cover"
        />
        <div>
          <h1 className="text-xl font-bold">ค้นหางาน</h1>
          <p className="text-sm text-yellow-200/90">หางานในฝันของคุณ</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2.5 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
          <MessageSquare size={20} />
        </button>
        <button className="relative p-2.5 bg-white/20 rounded-full hover:bg-white/30 transition-colors" onClick={() => navigate('/notifications')}>
          <Bell size={20} />
          <span className="absolute top-0 right-0 block h-5 w-5 text-[11px] leading-5 rounded-full bg-red-500 text-white flex items-center justify-center ring-2 ring-teal-400">
            5
          </span>
        </button>
        <button className="p-2.5 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;