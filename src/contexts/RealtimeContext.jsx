import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const RealtimeContext = createContext({
  activeViewers: {},
  notifications: [],
  setActiveViewers: () => {},
});

const useRealtime = () => useContext(RealtimeContext);

const RealtimeProvider = ({ children }) => {
  const [activeViewers, setActiveViewers] = useState({});
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const foodChanges = supabase
      .channel('food_items_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'food_items',
        },
        (payload) => {
          if (payload.eventType === 'UPDATE') {
            const foodItem = payload.new;
            if (foodItem.quantity <= 2) {
              setNotifications((prev) => [
                `Only ${foodItem.quantity} ${foodItem.name} left!`,
                ...prev,
              ].slice(0, 5));
            }
          } else if (payload.eventType === 'INSERT') {
            const foodItem = payload.new;
            setNotifications((prev) => [
              `New item available: ${foodItem.name}`,
              ...prev,
            ].slice(0, 5));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(foodChanges);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveViewers((prev) => {
        const newViewers = { ...prev };
        Object.keys(newViewers).forEach((key) => {
          newViewers[key] = Math.max(1, Math.floor(Math.random() * 5));
        });
        return newViewers;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <RealtimeContext.Provider value={{ activeViewers, notifications, setActiveViewers }}>
      {children}
    </RealtimeContext.Provider>
  );
};

export { RealtimeProvider, useRealtime };
