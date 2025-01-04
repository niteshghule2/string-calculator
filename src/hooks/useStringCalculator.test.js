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
test("Throw an error for negative number", () => {
  expect(() => add("1,-1")).toThrow("negative numbers not allowed -1");
});
test("Throw an error for multiple negative number", () => {
  expect(() => add("1,-1,-2")).toThrow("negative numbers not allowed -1, -2");
});

test("Number bigger than 1000 should be ignored", () => {
  expect(add("100002,1")).toBe(1);
});
test("Delimiters can be any length", () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});
test("Allow multiple delimiters", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});
test("Allow multiple delimiters with length longer", () => {
  expect(add("//[???][^^^^^^]\n4???2^^^^^^4")).toBe(10);
});
