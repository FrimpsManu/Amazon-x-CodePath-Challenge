import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const AccessibilitySettings = () => {
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    screenReader: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      const { data, error } = await supabase
        .from('user_settings')
        .select('*')
        .eq('user_id', supabase.auth.user()?.id)
        .single();

      if (data) setSettings(data);
      if (error) console.warn('Could not fetch settings:', error.message);
    };

    fetchSettings();
  }, []);

  const handleToggle = async (field) => {
    const updated = { ...settings, [field]: !settings[field] };
    setSettings(updated);
    setLoading(true);

    const { error } = await supabase
      .from('user_settings')
      .upsert({ user_id: supabase.auth.user()?.id, ...updated });

    if (error) toast.error('Failed to update settings.');
    else toast.success('Accessibility settings updated.');
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Accessibility Settings</h2>

      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={() => handleToggle('highContrast')}
            className="mr-2"
            disabled={loading}
          />
          High Contrast Mode
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={settings.largeText}
            onChange={() => handleToggle('largeText')}
            className="mr-2"
            disabled={loading}
          />
          Large Text
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={settings.screenReader}
            onChange={() => handleToggle('screenReader')}
            className="mr-2"
            disabled={loading}
          />
          Screen Reader Support
        </label>
      </div>
    </div>
  );
};

export default AccessibilitySettings;
