import { Class } from '@/utils/utils';
import React from 'react';

// Tipo de las props del componente
export type ProgressBarProps = {
  value: number; // Valor actual de la barra de progreso
  maxValue?: number; // Valor máximo de la barra de progreso (por defecto 100)
} & Class;

// Componente de barra de progreso horizontal
export default function ProgressBar ({ value, maxValue = 100, className }: ProgressBarProps) {
  // Asegúrate de que value y maxValue sean números
  const numericValue = typeof value === 'number' ? value : 0;
  const numericMaxValue = typeof maxValue === 'number' ? maxValue : 100;

  // Calcula el porcentaje de progreso
  const progressPercentage = (numericValue / numericMaxValue) * 100;

  return (
    <div style={{ width: '100%', height: '15px', backgroundColor: '#ccc', borderRadius: '4px', overflow: 'hidden' }} className={className}>
      <div
        className='progressPercentage'
        style={{
          width: `${progressPercentage}%`,
          height: '100%',
          backgroundColor: 'blue',
        }}
      />
    </div>
  );
}
