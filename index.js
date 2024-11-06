const add = (numbers) => {
  if (!numbers) {
    return 0;
  }
  const regX = /\/\/|[,\n;]/;
  let numberArr = numbers.split(regX);
  if (numberArr.length === 1) {
    const [num] = numberArr;
    return +num;
  }
  numberArr = numberArr.map((n) => +n);
  const negativeValueArr = numberArr.filter((n) => n < 0);
  if (negativeValueArr.length > 0) {
    throw Error(`negative numbers not allowed ${negativeValueArr.join(",")}`);
  }
  numberArr = numberArr.filter((n) => n > 0); ///.map((n) => +n);
  const sum = numberArr.reduce((sum, item) => sum + item, 0);
  return sum;
};

export default add;
