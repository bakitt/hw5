function createObjectFromArray(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i += 2) {
    obj[arr[i]] = arr[i + 1];
  }
  return obj;
}
const arr = ["name", "John", "lastname", "Black", "age", "23"];
const obj = createObjectFromArray(arr);
console.log(obj); 