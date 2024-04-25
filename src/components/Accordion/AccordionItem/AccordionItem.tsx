import React, { useContext } from "react";
import { Children, Class } from '@/utils/utils';
import { AccordionContext } from '../Accordion'; // Importamos el contexto AccordionContext

type AccordionItemProps = {
  index: number; // Añadimos una prop para el índice del elemento
} & Class & Children;

const AccordionItem: React.FC<AccordionItemProps> = ({ index, className, children }) => {
  const { openIndexes, handleItemClick } = useContext(AccordionContext);
  const isOpen = openIndexes.includes(index); // Verificamos si este ítem está abierto

  const toggleAccordion = () => {
    handleItemClick(index); // Llamamos a la función handleItemClick del contexto con el índice
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        // Pasamos isOpen y toggleAccordion a todos los hijos
        return React.cloneElement(child as React.ReactElement, {
          isOpen,
          toggleAccordion
        });
      })}
    </div>
  );
};

export default AccordionItem;
