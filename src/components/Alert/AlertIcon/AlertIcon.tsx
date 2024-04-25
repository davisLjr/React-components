import { Class } from '@/utils/utils';
import React, { ReactNode } from 'react'

export type AlertIconProps = {
  icon?: ReactNode;
}
export default function AlertIcon ({ icon, className }: AlertIconProps & Class) {

  return (
    <div className={className}>
      {icon}
    </div>
  )
}