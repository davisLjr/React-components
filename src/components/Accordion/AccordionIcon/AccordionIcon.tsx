import React, { useContext } from "react";
import { Class } from "@/utils/utils";
import { AccordionContext } from "../Accordion"; // Importamos el contexto AccordionContext

type AccordionIconProps = {
  icon?: React.ReactNode;
  index: number;
} & Class;

const AccordionIcon: React.FC<AccordionIconProps> = ({ icon, className, index }) => {
  const { openIndexes } = useContext(AccordionContext);
  const isOpen = openIndexes.includes(index); // Verificamos si el acordeón está abierto

  return (
    <div className={className} style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
      {icon}
    </div>
  );
};

export default AccordionIcon;
