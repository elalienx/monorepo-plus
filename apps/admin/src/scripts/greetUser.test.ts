// Node modules
import { expect, test } from "vitest";

// Project files
import greetUser from "./greetUser";

test("Correctly greets a user", () => {
  // Arrange
  const name = "Eduardo";
  const result = "Hello Eduardo!";

  // Act
  const test = greetUser(name);

  // Assert
  expect(test).toBe(result);
});

test("Pranks users who did not provide a name", () => {
  // Arrange
  const name1 = ""; // empty string on purpose
  const name2 = "   "; // string with invisible spaces on purpose
  const result = "Hey don't be shy!";

  // Act
  const test1 = greetUser(name1);
  const test2 = greetUser(name2);

  // Assert
  expect(test1).toBe(result);
  expect(test2).toBe(result);
});
