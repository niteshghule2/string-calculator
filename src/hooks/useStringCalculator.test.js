import { add } from "./useStringCalculator";

test("add empty string return 0", () => {
  expect(add("")).toBe(0);
});
