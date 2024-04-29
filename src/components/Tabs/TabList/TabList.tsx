// TabList.tsx
import { Children, Class } from '@/utils/utils';
import React from 'react';

export default function TabList ({ children, className }: Children & Class) {
  return <div className={className}>{children}</div>;
}