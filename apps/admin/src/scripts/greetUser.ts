export default function greetUser(name: string) {
  if (name.trim() === "") return "Hey don't be shy!";

  return `Hello ${name}!`;
}
