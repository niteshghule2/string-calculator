const add = (numbers) => {
  if (!numbers) return 0;
  let delimeter = numbers.startsWith("//") ? numbers.charAt(2) : ",";
  numbers = numbers
    .replace(/\/\/.\n/, "")
    .replace(/\\n/g, delimeter)
    .replace(/\n/g, delimeter);
  let numberList = numbers.split(delimeter);
  let negativeNumberList = numberList.filter((number) => parseInt(number) < 0);
  if (negativeNumberList?.length)
    throw new Error(
      "negative numbers not allowed " + negativeNumberList.join(", ")
    );
  return numberList.reduce((sum, number) => (sum += parseInt(number)), 0);
};

export { add };
