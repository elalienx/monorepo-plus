// Shared
import { Button } from "@monorepo-plus/aphrodite";

export default function App() {
  return (
    <div className="app">
      <h1>👩‍💼 Admin</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis molestias quod? Suscipit nemo
        necessitatibus eius, libero cum sapiente. Consequuntur sed unde, quasi laboriosam alias sunt odio minima velit
        mollitia!
      </p>
      <Button label="Click me" onClick={() => alert("Admin page")} />
    </div>
  );
}
