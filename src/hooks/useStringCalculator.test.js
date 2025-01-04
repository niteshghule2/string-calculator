import { add } from "./useStringCalculator";

test("add empty string return 0", () => {
  expect(add("")).toBe(0);
});
test("add single string return itself number", () => {
  expect(add("2")).toBe(2);
});
test("add two number string, return sum", () => {
  expect(add("1,5")).toBe(6);
});
test("add 1\n2,3, return 6", () => {
  expect(add("1\n2,3")).toBe(6);
});
test("Support custom delimiter - return 3 for //;\n1;2 input", () => {
  expect(add("//;\n1;2")).toBe(3);
});
