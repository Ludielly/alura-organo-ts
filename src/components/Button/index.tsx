import { ReactElement } from "react";
import "./Button.css";

interface ButtonProps {
  children: ReactElement | string
}

const Button = ({ children }: ButtonProps) => {
  return <button className="button">{children}</button>;
};

export default Button;
