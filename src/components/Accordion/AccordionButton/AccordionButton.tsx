import React, { useContext } from "react";
import { Children, Class } from "@/utils/utils";
import { AccordionContext } from "../Accordion"; // Importamos el contexto AccordionContext
import Button from "../../Button";

type AccordionButtonProps = {
  index: number; // Añadimos una prop para el índice del elemento
} & Class & Children;

export default function AccordionButton ({ index, className, children }: AccordionButtonProps) {
  const { handleItemClick } = useContext(AccordionContext);

  const handleClick = () => {
    handleItemClick(index); // Llamamos a la función handleItemClick del contexto con el índice
  };

  return (
    <Button className={className} onClick={handleClick}>
      {children}
    </Button>
  );
};
