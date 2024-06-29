import { Button } from "@playground/ui";

type SharedBoxProps = {
  text: string;
};

export const SharedBox = ({ text }: SharedBoxProps) => {
  return <Button text={text} />;
};
