import React, { useContext } from "react";
import { Children, Class } from "@/utils/utils";
import { AccordionContext } from "../Accordion"; // Importamos el contexto AccordionContext
import "./style.css"

type AccordionPanelProps = {
  index: number; // Añadimos una prop para el índice del elemento
} & Class & Children;

export default function AccordionPanel ({ index, className, children }: AccordionPanelProps) {
  const { openIndexes } = useContext(AccordionContext);
  const isOpen = openIndexes.includes(index); // Verificamos si este ítem está abierto

  const combinedClassName = `accordion-Panel ${isOpen ? "panel-open" : "panel-close"}` +
    (className ? ` ${className}` : "");

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

