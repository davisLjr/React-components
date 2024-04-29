import React, { useContext } from "react";
import { Children, Class } from "@/utils/utils";
import { AccordionContext } from "../Accordion";
import Button from "../../Button";

type AccordionButtonProps = {
  index: number;
} & Class & Children;

export default function AccordionButton ({ index, className, children }: AccordionButtonProps) {
  const { handleItemClick } = useContext(AccordionContext);

  const handleClick = () => {
    handleItemClick(index);
  };

  return (
    <Button className={className} onClick={handleClick}>
      {children}
    </Button>
  );
};
