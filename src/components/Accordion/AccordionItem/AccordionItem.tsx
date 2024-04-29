import React, { useContext } from "react";
import { Children, Class } from '@/utils/utils';
import { AccordionContext } from '../Accordion';

type AccordionItemProps = {
  index: number;
} & Class & Children;

const AccordionItem: React.FC<AccordionItemProps> = ({ index, className, children }) => {
  const { openIndexes, handleItemClick } = useContext(AccordionContext);
  const isOpen = openIndexes.includes(index);
  const toggleAccordion = () => {
    handleItemClick(index);
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
          isOpen,
          toggleAccordion
        });
      })}
    </div>
  );
};

export default AccordionItem;
