import "./App.css";
import { SharedBox } from "@kraaft/shared/components/SharedBox";
import { Button } from "@kraaft/ui";

export const App = () => {
  return (
    <div className="container">
      <Button text="Hello" />
      <SharedBox text="Foo" />
    </div>
  );
};
