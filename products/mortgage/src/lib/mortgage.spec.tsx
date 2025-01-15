import { render } from "@testing-library/react";

import Mortgage from "./mortgage";

describe("Mortgage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Mortgage />);
    expect(baseElement).toBeTruthy();
  });
});
