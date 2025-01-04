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
  it("return itself number for single number string", () => {
    renderInputAndSubmit("2");
    expect(screen.getByTestId("result")).toHaveTextContent("2");
  });
  it("return sum of two string numbers", () => {
    renderInputAndSubmit("1,5");
    expect(screen.getByTestId("result")).toHaveTextContent("6");
  });
  it("return 9 for 2,3\n4 input", () => {
    renderInputAndSubmit("2,3\n4");
    expect(screen.getByTestId("result")).toHaveTextContent("9");
  });
  it("support different delimeter - return 7 for //$\n2$5 input", () => {
    renderInputAndSubmit("//$\n2$5");
    expect(screen.getByTestId("result")).toHaveTextContent("7");
  });
  it("Throw an exception on negative number", () => {
    renderInputAndSubmit("-1");
    expect(screen.getByTestId("error")).toHaveTextContent(
      "negative numbers not allowed -1"
    );
  });
  it("Throw an exception on multiple negative number", () => {
    renderInputAndSubmit("-1,2,-2,-4");
    expect(screen.getByTestId("error")).toHaveTextContent(
      "negative numbers not allowed -1, -2, -4"
    );
  });
  it("Number bigger than 1000 should be ignored", () => {
    renderInputAndSubmit("1001,2");
    expect(screen.getByTestId("result")).toHaveTextContent("2");
  });
  it("Delimiters can be any length", () => {
    renderInputAndSubmit("//[***]\n1***2***3");
    expect(screen.getByTestId("result")).toHaveTextContent("6");
  });
  it("Allow multiple delimiters", () => {
    renderInputAndSubmit("//[*][%]\n1*2%3");
    expect(screen.getByTestId("result")).toHaveTextContent("6");
  });
});
