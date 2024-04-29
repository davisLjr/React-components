import React from "react";
import { ProgressBarProps } from "../ProgressBar";

// Componente de barra de progreso circular
export default function CircularProgressBar ({ value, maxValue = 100, className }: ProgressBarProps) {
  // Calculamos el porcentaje de progreso
  const progressPercentage = (value / maxValue) * 100;
  const circumference = 2 * Math.PI * 45; // Circunferencia del círculo

  // Calculamos el valor de dashoffset para la barra de progreso
  const dashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        position: 'relative',
      }}
      className={className}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Círculo de fondo */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="#ccc" strokeWidth="10" />

        {/* Barra de progreso */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="blue"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          transform="rotate(-90 50 50)"
        />
      </svg>
    </div>
  );
};
