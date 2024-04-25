import { Children, Class } from '@/utils/utils';
import React from 'react';

export default function Tag ({ className, children }: Class & Children) {
  return (
    <div className={className}>{children}</div>
  )
}