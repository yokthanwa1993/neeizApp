import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import BottomNavigation from './BottomNavigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HomeScreen = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [location, setLocation] = useState<string>('กำลังค้นหาตำแหน่ง...');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            const address = data.address;
            const displayLocation = address.city || address.town || address.suburb || address.county || 'ไม่สามารถระบุตำแหน่งได้';
            setLocation(displayLocation);
          } catch (error) {
            console.error("Error fetching location name:", error);
            setLocation("ไม่สามารถระบุตำแหน่งได้");
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          if (error.code === error.PERMISSION_DENIED) {
            setLocation("ไม่อนุญาตให้เข้าถึงตำแหน่ง");
          } else {
            setLocation("ไม่สามารถรับตำแหน่งได้");
          }
        }
      );
    } else {
      setLocation("เบราว์เซอร์ไม่รองรับ Geolocation");
    }
  }, []);

  const featuredJobs = [
    { id: 1, title: 'โปรโมชั่นพิเศษ', description: 'รับโบนัสเพิ่ม 500 บาท', image: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=400&h=200&fit=crop&crop=center' },
    { id: 2, title: 'งานใหม่ล่าสุด', description: 'มีงานใหม่ 12 ตำแหน่ง', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=200&fit=crop&crop=center' },
    { id: 3, title: 'แนะนำเพื่อน', description: 'รับเงินรางวัล 200 บาท', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop&crop=center' },
  ];

  const renderWelcomeSection = () => {
    const displayName = user ? user.name : 'ผู้เยี่ยมชม';
    const displayPicture = user ? user.picture : undefined;
    const fallbackChar = user ? user.name.charAt(0) : 'G';

    return (
      <Card className="bg-gradient-to-br from-primary to-amber-500 text-white border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16 border-4 border-white/50">
              <AvatarImage src={displayPicture} alt={displayName} />
              <AvatarFallback>{fallbackChar}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{displayName}</CardTitle>
              <CardDescription className="text-white/80 flex items-center mt-1">
                <MapPin className="h-4 w-4 mr-1.5" />
                {location}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {user ? (
            <div className="flex justify-between items-center bg-white/20 p-4 rounded-lg">
              <div>
                <p className="text-sm text-white/80">ยอดเงินคงเหลือ</p>
                <p className="text-2xl font-bold">฿1,250.00</p>
              </div>
              <Button variant="secondary" onClick={() => navigate('/wallet')}>
                ดูรายละเอียด <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="text-center bg-white/20 p-4 rounded-lg">
              <p className="mb-3">เข้าสู่ระบบเพื่อดูยอดเงินและจัดการงาน</p>
              <Button variant="secondary" onClick={() => navigate('/login')}>
                เข้าสู่ระบบ
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#57c785] to-primary pb-20">
      <main className="px-6 sm:px-8 lg:px-12 py-6 space-y-6">
        <section>
          {renderWelcomeSection()}
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">สำหรับคุณโดยเฉพาะ</h2>
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent className="-ml-2">
              {featuredJobs.map((job) => (
                <CarouselItem key={job.id} className="md:basis-1/2 lg:basis-1/3 pl-2">
                  <Card className="overflow-hidden h-full bg-gray-50 border-0">
                    <img src={job.image} alt={job.title} className="w-full h-32 object-cover"/>
                    <CardHeader>
                      <CardTitle className="text-gray-800">{job.title}</CardTitle>
                      <CardDescription>{job.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default HomeScreen;