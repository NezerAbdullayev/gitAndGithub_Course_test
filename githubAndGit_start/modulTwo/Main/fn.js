const addFn = (...arg) => {
  let array = [...arg];
  if (!array.length) return;

  return array?.reduce((acc, cur) => acc + cur, 0);
};

let c = addFn(3, 23, 45, 121, 2432, 34, 34, 35, 4);
