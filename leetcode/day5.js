const map = function (arr, fn) {
  const returnedArray = [];

  for (let index = 0; index < arr.length; index += 1) {
    returnedArray[index] = fn(arr[index], index);
  }

  return returnedArray;
};
