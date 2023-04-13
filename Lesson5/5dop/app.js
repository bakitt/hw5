const getAverage = (numbers) => {
  const sum = numbers.reduce((acc, number) => acc + number, 0);
  const length = numbers.length;
  return sum / length;
};

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(getAverage(numbers));