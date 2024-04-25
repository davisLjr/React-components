import { Children, Class } from '@/utils/utils';
import React from 'react'

export type AlertDescriptionProps = {
  description?: string;
}
export default function AlertDescription ({ children, className, description }: AlertDescriptionProps & Class & Children) {

  return (
    <div className={className}>
      {children}
      {description && <p>{description}</p>}
    </div>
  )
}