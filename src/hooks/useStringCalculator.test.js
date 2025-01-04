import { add } from "./useStringCalculator";

test("add empty string return 0", () => {
  expect(add("")).toBe(0);
});
test("add single string return itself number", () => {
  expect(add("2")).toBe(2);
});
