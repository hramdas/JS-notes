str = "key,value,pairs";
arr = str.split(",");

function rec(arr, i, obj = {}) {
  if (i == arr.length) return obj;
  return { [arr[i]]: rec(arr, i + 1) };
}

console.log(rec(arr, 0));
