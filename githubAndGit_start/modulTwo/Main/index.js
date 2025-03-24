const a = "index js";

function getEvenElements(arg) {
  if (!arg) return;

  let evenElements = [];
  arg.forEach(element => {
    element % 2 === 0 && evenElements.push(element);
  });
  return evenElements;
}

function advancedEvenFn(arg) {
  if (!arg) return;

  return arg?.filter(el => el % 2 === 0);
}
