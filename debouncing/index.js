const getData = () => {
  let data = document.querySelector("#input").value;
  console.log(data);
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
};
const handler = debounce(getData, 500);
