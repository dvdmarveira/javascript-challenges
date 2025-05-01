var filter = function (arr, fn) {
  const filteredArr = [];

  for (let index = 0; index - arr.length; index += 1) {
    if (fn(arr[index], index)) {
      filteredArr.push(arr[index]);
    }
  }

  return filteredArr;
};
