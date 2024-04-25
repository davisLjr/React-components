// MenuBody.tsx
import React from 'react';
import { Class, Children } from '@/utils/utils';

interface MenuBodyProps extends Class, Children {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuBody: React.FC<MenuBodyProps> = ({ children, className, setIsOpen }) => {
  const handleItemClick = () => {
    // Cerrar el menú al hacer clic en un elemento del menú
    setIsOpen(false);
    // Aquí puedes agregar más lógica según tus necesidades
  };

  return (
    <div className={`menu-body ${className}`}>
      {React.Children.map(children, (child, index) => (
        // Pasamos una función de clic para manejar el cierre del menú al hacer clic en un elemento del menú
        React.cloneElement(child as React.ReactElement, { onClick: handleItemClick, key: index })
      ))}
    </div>
  );
};

export default MenuBody;
