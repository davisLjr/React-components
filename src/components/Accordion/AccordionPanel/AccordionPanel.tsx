import React, { useContext } from "react";
import { Children, Class } from "@/utils/utils";
import { AccordionContext } from "../Accordion"; // Importamos el contexto AccordionContext

type AccordionPanelProps = {
  index: number; // Añadimos una prop para el índice del elemento
} & Class & Children;

export default function AccordionPanel ({ index, className, children }: AccordionPanelProps) {
  const { openIndexes } = useContext(AccordionContext);
  const isOpen = openIndexes.includes(index); // Verificamos si este ítem está abierto

  return (
    <div className={className} style={{ display: isOpen ? "block" : "none" }}>
      {children}
    </div>
  );
};

