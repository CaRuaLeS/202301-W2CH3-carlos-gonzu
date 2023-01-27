const arr = [1, 2, 3, 4, 5];

export const aLength = (arr) => {
  let lengthValue = 0;
  for (let i of arr) {
    lengthValue++;
  }

  return lengthValue;
};

console.log(aLength(arr));
