import React, { useContext } from "react";
import { Class } from "@/utils/utils";
import { AccordionContext } from "../Accordion";
import "./style.css"

type AccordionIconProps = {
  icon?: React.ReactNode;
  index: number;
} & Class;

const AccordionIcon: React.FC<AccordionIconProps> = ({ icon, className, index }) => {
  const { openIndexes } = useContext(AccordionContext);
  const isOpen = openIndexes.includes(index);


  const combinedClassName = `accordion-icon ${isOpen ? "open" : "close"}` +
    (className ? ` ${className}` : "");
  return (
    <div className={combinedClassName}>
      {icon}
    </div>
  );
};

export default AccordionIcon;
