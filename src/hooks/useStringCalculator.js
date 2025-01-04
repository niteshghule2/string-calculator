const add = (numbers) => {
  if (!numbers) return 0;
  let delimeter = ",";
  if (numbers.startsWith("//")) {
    let matchDelimiter =
      numbers.match(/^\/\/(.*?)\n/) || numbers.match(/^\/\/(.*?)\\n/);
    if (matchDelimiter) {
      let delimiterPart = matchDelimiter[1];
      if (delimiterPart.startsWith("[")) {
        delimeter = delimiterPart.slice(1, -1);
      } else {
        delimeter = delimiterPart;
      }
    }
  }
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
  return numberList.reduce((sum, number) => {
    let parseNumber = parseInt(number);
    return parseNumber <= 1000 ? sum + parseNumber : sum;
  }, 0);
};

export { add };
