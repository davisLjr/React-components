// Tabs.tsx
import { Children, Class } from '@/utils/utils';
import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto para los tabs
const TabsContext = createContext<any>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabsContext must be used within a TabsProvider');
  }
  return context;
};

export default function Tabs ({ children, className }: Children & Class) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className={className}>
      <TabsContext.Provider value={{ activeTabIndex, setActiveTabIndex }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
}