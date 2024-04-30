//Este documento contiene algunos comentarios que indican el porque de los estilos o condicional de clase aplicada al componente, seguramente mas adelante se utilizaran para separar los estilos en hojas separadas.
import React, { CSSProperties } from 'react';
import { Children, Class } from '@/utils/utils';

export interface ModalProps {
  isOpen: boolean;
  style?: CSSProperties;
}

const Modal: React.FC<ModalProps & Class & Children> = ({ children, className, isOpen = false, style }) => {

  const backdropStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color de fondo semitransparente
    zIndex: 1000, // Asegura que la capa de fondo esté detrás del modal
    display: isOpen ? 'block' : 'none'
  };

  // Agregar la clase "open" si isOpen es true
  const modalClassName = `modal${className ? ` ${className}` : ''}${isOpen ? ' open' : ''}`;

  const modalStyle: CSSProperties = {
    transition: 'opacity 0.3s ease-in-out',
    opacity: isOpen ? 1 : 0,
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    background: 'white',
    zIndex: 9999,
    padding: '1rem',
    transform: 'translate(-50%, -50%)'
  };


  return (
    <>
      <div className="backdrop" style={backdropStyle}></div>
      <div className={modalClassName} style={modalStyle}>
        {children}
      </div>
    </>
  );
};

export default Modal;
