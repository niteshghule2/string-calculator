const add = (numbers) => {
  if (!numbers) return 0;
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    let matchDelimiter = numbers.match(/^\/\/(.*?)(?:\n|\\n)/);
    if (matchDelimiter) {
      let delimiterPart = matchDelimiter[1];
      if (delimiterPart.startsWith("[")) {
        const delimiterList = delimiterPart
          .match(/\[.*?\]/g)
          .map((d) => d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
        delimiter = new RegExp(delimiterList.join("|"));
      } else {
        delimiter = new RegExp(
          delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        );
      }
    }
    numbers = numbers.replace(/\/\/.*?(?:\n|\\n)/, "");
  }
  let numberList = numbers.split(delimiter).map(Number);
  let negativeNumberList = numberList.filter((number) => number < 0);
  if (negativeNumberList?.length)
    throw new Error(
      "negative numbers not allowed " + negativeNumberList.join(", ")
    );
  return numberList.reduce(
    (sum, number) => (number <= 1000 ? sum + number : sum),
    0
  );
};

export { add };
