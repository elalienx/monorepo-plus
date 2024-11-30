// Shared
import { Button } from "@monorepo-plus/aphrodite";

export default function App() {
  return (
    <div className="app">
      <h1>👩‍💼 Admin 2</h1>
      <Button label="Click me"                    onClick={() => alert("Admin page")} />
    </div>
  );
}
