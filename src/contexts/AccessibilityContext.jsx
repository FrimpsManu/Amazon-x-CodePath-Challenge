import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AccessibilityContext = createContext();

export const useAccessibility = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    screenReader: false,
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) return;

        const { data, error } = await supabase
          .from('user_settings')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error) {
          console.warn('Accessibility settings fetch failed:', error.message);
        } else if (data) {
          setSettings(data);
        }
      } catch (err) {
        console.error('Unexpected error fetching accessibility settings:', err.message);
      }
    };

    fetchSettings();
  }, []);

  const wrapperClass = `
    ${settings.highContrast ? 'contrast-high' : ''}
    ${settings.largeText ? 'text-xl' : ''}
  `;

  return (
    <AccessibilityContext.Provider value={settings}>
      <div className={wrapperClass}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

export default AccessibilityContext;
