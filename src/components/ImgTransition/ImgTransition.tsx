import React from 'react';
import { Children, Class } from '@/utils/utils';
import './style.css'

export default function ImgTransition ({ className, children }: Children & Class) {
  return (
    <article className={`${className ? `${className}` : ''} ImgTransition`}>
      {children}
    </article>
  )
}