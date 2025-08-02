import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';
import HomePage from './pages/HomePage';
import FullTimeJobs from './pages/FullTimeJobs';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-[calc(100vh-5rem)] text-white text-2xl p-4">
    <h1>{title}</h1>
  </div>
);

const NotificationsPage = () => (
    <div className="p-4 text-white">
        <h1 className="text-2xl font-bold">การแจ้งเตือน</h1>
        <p className="mt-4">ยังไม่มีการแจ้งเตือน</p>
    </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/full-time-jobs" element={<FullTimeJobs />} />
        
        {/* หน้าอื่นๆ จะแสดงเป็นหน้าว่างชั่วคราว */}
        <Route path="/jobs" element={<PlaceholderPage title="ค้นหางาน" />} />
        <Route path="/my-shifts" element={<PlaceholderPage title="งานของฉัน" />} />
        <Route path="/wallet" element={<PlaceholderPage title="กระเป๋าเงิน" />} />
        <Route path="/profile" element={<PlaceholderPage title="โปรไฟล์" />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Routes>
      <BottomNavigation />
    </Router>
  );
};

export default App;