import { Children, Class } from '@/utils/utils';
import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto AccordionContext
export const AccordionContext = createContext<any>(null);

type AccordionProps = {
  multiple?: boolean;
} & Class & Children;

export default function Accordion ({ multiple = false, children, className }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleItemClick = (index: number) => {
    if (multiple) {
      setOpenIndexes((prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index)
          : [...prevIndexes, index]
      );
    } else {
      setOpenIndexes((prevIndexes) => (prevIndexes.includes(index) ? [] : [index]));
    }
  };

  return (
    <AccordionContext.Provider value={{ openIndexes, handleItemClick }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};
