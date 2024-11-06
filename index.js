const add = (numbers) => {
  if (!numbers) {
    return 0;
  }
  const regX = /[,]/;
  let numberArr = numbers.split(regX);
  if (numberArr.length === 1) {
    const [num] = numberArr;
    return +num;
  } 

};

export default add;
