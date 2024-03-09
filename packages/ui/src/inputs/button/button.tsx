import type { ButtonProps } from "./button.props";
import "./Button.css";

export const Button = ({ text }: ButtonProps) => {
  return <div className="text">{`Web + ${text}`}</div>;
};
