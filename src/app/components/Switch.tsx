"use client"

import { InputHTMLAttributes, useRef } from "react";

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Switch({ label, className, ...props }: SwitchProps) {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <label className={`c-switch ${className || ''}`}>
      <span>{label}</span>
      <input ref={ref} type="checkbox" className="invisible" {...props} />
    </label>
  );
}
