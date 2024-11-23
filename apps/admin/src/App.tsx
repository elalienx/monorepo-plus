// Shared
import { Button } from "@monorepo-plus/components";

export default function App() {
  return (
    <div className="app">
      <h1>👩‍💼 Admin</h1>
      <Button onClick={() => window.open("https://admin.lendo.se", "_blank")} label="Open" />
    </div>
  );
}
