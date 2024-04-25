import { Children, Class } from '@/utils/utils';
import React from 'react';

export type BadgeProps = {
  title?: string;
} & Class & Children

export default function Badge ({ children, className, title }: BadgeProps) {
  return (
    <span className={className}>{title} {children}</span>
  )
}