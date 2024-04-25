// Tab.tsx
import React from 'react';
import { useTabsContext } from '../Tabs';
import { Children, Class } from '@/utils/utils';
import Button from '../../Button';

type TabProps = {
  index: number;
} & Children & Class;

export default function Tab ({ index, children, className }: TabProps) {
  const { activeTabIndex, setActiveTabIndex } = useTabsContext();
  const isActive = index === activeTabIndex;

  const handleClick = () => {
    setActiveTabIndex(index);
  };

  return (
    <Button className={className} onClick={handleClick} style={{ fontWeight: isActive ? 'bold' : 'normal', cursor: 'pointer' }}>
      {children}
    </Button>
  );
}