// const expect = function (val) {
//   return {
//     toBe: (val2) => {
//       if (val !== val2) throw new Error("Not Equal");
//       return true;
//     },
//     notToBe: (val2) => {
//       if (val === val2) throw new Error("Equal");
//       return true;
//     },
//   };
// };

// const expectResult = expect(5).toBe(5);
// // const expectResult = expect(5).toBe(6);
// // const expectResult2 = expect(5).notToBe(6);
// console.log(expectResult);
// // console.log(expectResult2);]

const expect = function (val) {
  return {
    toBe: (val2) => {
      if (val === val2) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (val2) => {
      if (val === val2) throw new Error("Equal");
      return true;
    },
  };
};
