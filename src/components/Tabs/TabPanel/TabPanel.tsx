// TabPanel.tsx
import React from 'react';
import { useTabsContext } from '../Tabs';
import { Children, Class } from '@/utils/utils';

type TabPanelProps = {
  index: number;
} & Children & Class;

export default function TabPanel ({ index, children, className }: TabPanelProps) {
  const { activeTabIndex } = useTabsContext();
  const isActive = index === activeTabIndex;

  return <div style={{ display: isActive ? 'block' : 'none' }} className={className}>{children}</div>;
}