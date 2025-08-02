import React from 'react';
import Header from '../components/home/Header';
import StatCard from '../components/home/StatCard';
import AiMatchingSection from '../components/home/AiMatchingSection';
import { Briefcase, CheckSquare, Bookmark } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="pb-24">
      <Header />
      <main className="space-y-8 mt-4">
        <section className="px-4">
          <h1 className="text-5xl font-bold text-white">1,200+</h1>
          <p className="text-lg text-yellow-200/90">ตำแหน่งงานว่างสำหรับคุณ</p>
        </section>

        <section className="px-4 grid grid-cols-3 gap-3">
          <StatCard
            title="งานใหม่"
            value="25"
            subtitle="7 วันล่าสุด"
            icon={<Briefcase size={20} className="text-gray-400" />}
          />
          <StatCard
            title="สมัครแล้ว"
            value="5"
            subtitle="+2 ในสัปดาห์นี้"
            subtitleColor="text-green-400"
            icon={<CheckSquare size={20} className="text-green-400" />}
          />
          <StatCard
            title="บันทึกแล้ว"
            value="12"
            subtitle="ดูรายการ"
            icon={<Bookmark size={20} className="text-yellow-400" />}
          />
        </section>

        <AiMatchingSection />
      </main>
    </div>
  );
};

export default HomePage;