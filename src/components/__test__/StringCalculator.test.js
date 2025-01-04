import { screen, render, fireEvent } from "@testing-library/react";
import StringCalculator from "../StringCalculator";

describe("String Calculator component", () => {
  const renderInputAndSubmit = (inputValue) => {
    render(<StringCalculator />);
    fireEvent.input(screen.getByTestId("input-numbers"), {
      target: { value: inputValue },
    });
    fireEvent.submit(screen.getByTestId("calculator-form"));
  };
  it("should return 0 for empty input", () => {
    renderInputAndSubmit("");
    expect(screen.getByTestId("result")).toHaveTextContent("0");
  });
});
