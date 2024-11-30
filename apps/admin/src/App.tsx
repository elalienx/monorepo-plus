// Shared
import { Button } from "@monorepo-plus/aphrodite";

export default function App() {
  return (
    <div className="app">
      <h1>👩‍💼 Admin</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus sequi quasi assumenda facere dolor earum
        ab, distinctio soluta suscipit reprehenderit, natus maxime in ut maiores nemo beatae neque fuga?
      </p>
      <Button label="Click me" onClick={() => alert("Admin page")} />
    </div>
  );
}
