// Shared
// import Button from "@monorepo-plus/shared/components/src/lib/button/Button"; // Ensure correct import path

import { Button, Components } from "@monorepo-plus/components";

export default function App() {
  return (
    <div className="app">
      <h1>👩‍💼 Admin</h1>
      <Components />
      <Button onClick={() => window.open("https://admin.lendo.se", "_blank")} label="View" />
    </div>
  );
}
