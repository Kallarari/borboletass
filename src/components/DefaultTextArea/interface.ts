import { InputHTMLAttributes } from "react";

export interface IDefaultTextArea extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hasError?:boolean;
}
