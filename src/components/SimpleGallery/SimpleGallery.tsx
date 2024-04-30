import { Children, Class } from '@/utils/utils';
import React from 'react';
import "./style.css"

export default function SimpleGallery ({ children, className }: Children & Class) {
  return (
    <section className={`${className ? `${className}` : ''} simpleGallery`}>
      {children}
    </section>
  )
}
