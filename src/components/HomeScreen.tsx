import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import BottomNavigation from './BottomNavigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/ui/carousel';
import { MessageSquare, Bell, Settings, Briefcase, CheckSquare, Bookmark } from 'lucide-react';

const HomeScreen = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const displayName = user ? user.name : 'Guest';
  const displayPicture = user ? user.picture : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face';
  const fallbackChar = user ? user.name.charAt(0).toUpperCase() : 'G';

  const stats = [
    { title: 'งานใหม่', value: '25', description: '7 วันล่าสุด', icon: Briefcase },
    { title: 'สมัครแล้ว', value: '5', description: '+2 ในสัปดาห์นี้', icon: CheckSquare },
    { title: 'บันทึกแล้ว', value: '12', description: 'ดูรายการ', icon: Bookmark },
  ];

  const aiMatchedJobs = [
    {
      id: 1,
      title: 'วิศวกรซอฟต์แวร์',
      company: 'อินโนเวทค - กรุงเทพ',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14694dd?w=400&h=500&fit=crop&crop=center',
    },
    {
      id: 2,
      title: 'การตลาดดิจิทัล',
      company: 'มาร์เก็ตบูสต์ - เชียงใหม่',
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&h=500&fit=crop&crop=center',
    },
    {
      id: 3,
      title: 'นักออกแบบ UI/UX',
      company: 'ครีเอทีฟ สตูดิโอ',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=500&fit=crop&crop=center',
    },
     {
      id: 4,
      title: 'ผู้จัดการโครงการ',
      company: 'บิวด์อิท - ภูเก็ต',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=500&fit=crop&crop=center',
    },
  ];
  
  const CarouselIndicator = () => {
    const { api } = useCarousel();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    React.useEffect(() => {
      if (!api) return;
      setSelectedIndex(api.selectedScrollSnap());
      api.on("select", () => {
        setSelectedIndex(api.selectedScrollSnap());
      });
    }, [api]);

    return (
      <div className="flex justify-center items-center gap-2 mt-4">
        {aiMatchedJobs.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'w-5 bg-yellow-400' : 'w-1.5 bg-gray-400/50'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-yellow-400 pb-24">
      {/* Top Section */}
      <div className="px-4 pt-6 pb-4">
        {/* Header */}
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 border-2 border-white/80 shadow-md">
              <AvatarImage src={displayPicture} alt={displayName} />
              <AvatarFallback className="bg-yellow-100 text-yellow-600 font-bold">{fallbackChar}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold text-md text-white drop-shadow-md">ค้นหางาน</h1>
              <p className="text-xs text-white/80 drop-shadow-md">หางานในฝันของคุณ</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="bg-white/60 rounded-full backdrop-blur-md w-9 h-9" onClick={() => navigate('/chat-history')}>
              <MessageSquare className="h-4 w-4 text-gray-700" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/60 rounded-full backdrop-blur-md relative w-9 h-9" onClick={() => navigate('/notifications')}>
              <Bell className="h-4 w-4 text-gray-700" />
              <span className="absolute top-0 right-0 block h-3.5 w-3.5 text-[9px] flex items-center justify-center rounded-full bg-red-500 text-white border border-yellow-300">5</span>
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/60 rounded-full backdrop-blur-md w-9 h-9" onClick={() => navigate('/settings')}>
              <Settings className="h-4 w-4 text-gray-700" />
            </Button>
          </div>
        </header>

        {/* Job Count */}
        <div className="mb-4">
          <p className="text-4xl font-extrabold text-white drop-shadow-md">1,200+</p>
          <p className="text-white/80 drop-shadow-md text-sm">ตำแหน่งงานว่างสำหรับคุณ</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-2">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-gray-800/90 text-white p-2 rounded-xl shadow-lg backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-semibold">{stat.title}</p>
                    <Icon className="h-3 w-3 text-gray-400" />
                  </div>
                  <p className="text-lg font-bold">{stat.value}</p>
                  <p className="text-[10px] text-gray-400">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 pb-4">
        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-white drop-shadow-md">งานที่ AI Matching มา</h2>
            <Button variant="link" className="text-white/80 hover:text-white px-0 text-sm">ดูทั้งหมด</Button>
          </div>
          <Carousel opts={{ loop: false, align: "start" }} className="w-full">
            <CarouselContent className="-ml-2">
              {aiMatchedJobs.map((job) => (
                <CarouselItem key={job.id} className="basis-1/2 pl-2">
                  <Card className="relative aspect-[3/4] rounded-2xl overflow-hidden border-none shadow-lg">
                    <img src={job.image} alt={job.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-3 text-white">
                      <h3 className="font-bold text-md drop-shadow-sm">{job.title}</h3>
                      <p className="text-xs text-gray-300 drop-shadow-sm truncate">{job.company}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <CarouselIndicator />
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default HomeScreen;