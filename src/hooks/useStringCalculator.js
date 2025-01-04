const add = (numbers) => {
  if (!numbers) return 0;
  let delimeter = numbers.startsWith("//") ? numbers.charAt(2) : ",";
  numbers = numbers
    .replace(/\/\/.\n/, "")
    .replace(/\\n/g, delimeter)
    .replace(/\n/g, delimeter);
  return numbers
    .split(delimeter)
    .reduce((sum, number) => (sum += parseInt(number)), 0);
};

export { add };
