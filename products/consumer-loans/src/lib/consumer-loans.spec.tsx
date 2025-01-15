import { render } from "@testing-library/react";

import ConsumerLoans from "./consumer-loans";

describe("ConsumerLoans", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ConsumerLoans />);
    expect(baseElement).toBeTruthy();
  });
});
