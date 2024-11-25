Array.prototype.myMap = function (cb) {
  let temArr = [];
  for (let i = 0; i < this.length; i++) {
    temArr.push(cb(this[i], i, this));
  }
  return temArr;
};

const numArr = [1, 2, 3, 4, 4];
const newArr = numArr.myMap((val) => val + 1);
console.log(newArr);
