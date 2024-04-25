// Tab.tsx
import { Children } from '@/utils/utils';
import React from 'react';

export type TextHiddenProps = {
  as:
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'small'
  | 'strong'
  | 'em'
  | 'mark'
  | 'sup'
  | 'sub'
  | 'kbd'
  | 'spam';
} & Children;


export default function TextHidden ({ as, children }: TextHiddenProps) {
  const hiddenStyle = {
    width: 0,
    height: 0,
    overflow: 'hidden',
  };

  return React.createElement(as, { style: hiddenStyle }, children);
}