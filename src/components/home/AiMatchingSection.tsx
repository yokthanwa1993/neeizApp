import React from 'react';

const JobCard = ({ title, company, location, imageUrl }: { title: string, company: string, location: string, imageUrl: string }) => (
  <div className="relative w-60 h-40 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg group cursor-pointer">
    <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4 text-white">
      <h3 className="font-bold text-base">{title}</h3>
      <p className="text-xs text-gray-200">{company} - {location}</p>
    </div>
  </div>
);

const AiMatchingSection = () => {
  const jobs = [
    {
      title: 'วิศวกรซอฟต์แวร์',
      company: 'อินโนเวเทค',
      location: 'กรุงเทพ, ประเทศไทย',
      imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'การตลาดดิจิทัล',
      company: 'มาร์เก็ตบูสต์',
      location: 'เชียงใหม่',
      imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop',
    },
    {
      title: 'UX/UI Designer',
      company: 'ครีเอทีฟโซลูชั่น',
      location: 'กรุงเทพ',
      imageUrl: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop',
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-xl font-bold text-white">งานที่ AI Matching มา</h2>
        <a href="#" className="text-sm text-yellow-300 font-semibold">ดูทั้งหมด</a>
      </div>
      <div className="pl-4 flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
        <div className="w-0.5 flex-shrink-0"></div>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <div className="w-6 h-2 bg-yellow-400 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default AiMatchingSection;