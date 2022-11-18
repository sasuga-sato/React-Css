import { CssModules } from "./Components/CssModules";
import { Emotion } from "./Components/Emotion";
import { InlineStyle } from "./Components/inlineStyle";
import { StyledCompornents } from "./Components/StyledCompornents";
import { StyledJsx } from "./Components/styledjsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledCompornents />
      <Emotion />
    </div>
  );
}
