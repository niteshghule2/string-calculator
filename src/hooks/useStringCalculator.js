const add = (numbers) => {
  if (!numbers) return 0;
  numbers = numbers.replace(/\\n/g, ",").replace(/\n/g, ",");
  return numbers
    .split(",")
    .reduce((sum, number) => (sum += parseInt(number)), 0);
};

export { add };
