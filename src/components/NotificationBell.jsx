import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { useRealtime } from '../contexts/RealtimeContext';

const NotificationBell = () => {
  const { notifications } = useRealtime();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover-gray-800 transition-colors"
      >
        <Bell className="w-5 h-5" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {notifications.length}
          </span>
        )}
      </button>

      {isOpen && notifications.length > 0 && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="px-4 py-2 hover-gray-50 cursor-pointer text-sm"
            >
              {notification}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;