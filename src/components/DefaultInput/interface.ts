import { InputHTMLAttributes } from "react";

export interface IDefaultInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hasError?:boolean;
}
