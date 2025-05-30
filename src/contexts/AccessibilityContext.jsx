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
      const {
        data,
        error
      } = await supabase
        .from('user_settings')
        .select('*')
        .eq('user_id', supabase.auth.user()?.id)
        .single();

      if (data) setSettings(data);
      if (error) console.warn('Accessibility settings fetch failed:', error.message);
    };

    fetchSettings();
  }, []);

  // Apply styles globally via a wrapper div
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