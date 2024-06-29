import type { ButtonProps } from "./button.props";
import "./button.css";

export const Button = ({ text }: ButtonProps) => {
  return <div className="text">{`Web + ${text}`}</div>;
};
