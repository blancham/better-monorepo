import { SharedBox } from "@playground/shared/components/SharedBox";
import { Button } from "@playground/ui";

import "./app.css";

export const App = () => {
  return (
    <div className="container">
      <Button text="Hello" />
      <SharedBox text="Foo" />
    </div>
  );
};
