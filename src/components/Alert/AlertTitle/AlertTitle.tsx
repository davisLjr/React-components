import { Children, Class } from '@/utils/utils';
import React from 'react'

export default function AlertTitle ({ children, className }: Class & Children) {

  return (
    <div className={className}>
      {children}
    </div>
  )
}