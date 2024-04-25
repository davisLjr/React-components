// Menu.tsx
import React, { useState, useRef, useEffect } from 'react';
import MenuBody from './MenuBody'
import { Children, Class } from '@/utils/utils';

interface MenuProps extends Class {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu ({ children, className, setIsOpen }: MenuProps & Children & Class) {
  const [isOpen, setIsOpenLocal] = useState(false); // Cambiado para evitar confusión
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpenLocal(false); // Cambiado para evitar confusión
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpenLocal((prevIsOpen) => !prevIsOpen); // Cambiado para evitar confusión
    setIsOpen((prevIsOpen) => !prevIsOpen); // Pasar setIsOpen al componente padre
  };

  return (
    <div className={`menu ${className}`} ref={menuRef}>
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && <MenuBody setIsOpen={setIsOpen}>{children}</MenuBody>}
    </div>
  );
};
