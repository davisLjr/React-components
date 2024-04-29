// Alert.tsx
import { Children, Class } from '@/utils/utils';
import React from 'react';

type AlertProps = {
  status: "success" | "warning" | "danger" | "info";
} & Children & Class & React.HTMLAttributes<HTMLDivElement>;

export default function Alert ({ children, className, status, ...rest }: AlertProps) {
  const statusClass = ["success", "warning", "danger"].includes(status) ? status : "info";

  const combinedClassName = `${className ? className + ' ' : ''}${statusClass}`;

  return (
    <div className={combinedClassName} {...rest}>
      {children}
    </div>
  );
};