// Shared
import { Button } from "@monorepo-plus/components";

// Project files
import NavigationBar from "./components/navigation-bar/NavigationBar";

export default function App() {
  return (
    <div className="app">
      <NavigationBar />
      <h1>👩‍💼 Admin</h1>
      <Button onClick={() => window.open("https://admin.lendo.se", "_blank")} label="Open" />
    </div>
  );
}
