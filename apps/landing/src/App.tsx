// Shared
import { Button } from "@monorepo-plus/components";

export default function App() {
  return (
    <div className="app">
      <h1>🌎 Landing</h1>
      <Button onClick={() => window.open("https://www.lendo.se", "_blank")} label={"Open"} />
    </div>
  );
}
