const add = (numbers) => {
  if (!numbers) {
    return 0;
  }
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    delimiter = getCustomDelimiters(numbers);
    numbers = numbers.replace(/\/\/.*?(?:\n|\\n)/, "");
  }
  return getListOfNumbers(numbers, delimiter)?.reduce(
    (sum, number) => (number <= 1000 ? sum + number : sum),
    0
  );
};

const getCustomDelimiters = (numbers) => {
  let matchDelimiter = numbers.match(/^\/\/(.*?)(?:\n|\\n)/);
  if (matchDelimiter) {
    let delimiterPart = matchDelimiter[1];
    if (delimiterPart.startsWith("[")) {
      const delimiterList = delimiterPart
        .match(/\[.*?\]/g)
        .map((delimiter) =>
          delimiter.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        );
      return new RegExp(delimiterList.join("|"));
    } else {
      return new RegExp(delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    }
  }
  return "";
};
const getListOfNumbers = (numbers, delimiter) => {
  const numberList = numbers.split(delimiter).map(Number);
  let negativeNumberList = numberList.filter((number) => number < 0);
  if (negativeNumberList?.length) {
    throw new Error(
      "negative numbers not allowed " + negativeNumberList.join(", ")
    );
  }
  return numberList;
};

export { add };
