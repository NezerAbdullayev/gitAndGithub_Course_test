export const getFormattedData = data => {
  if (!data) return;

  const letterArr = ["a", "b", "c", "d", "f"];
  const randomNum = (n = 10) => Math.floor(Math.random() * n);

  const formatData = data?.map(el => {
    const key = randomNum(9999999);
    const latKey = letterArr[randomNum()];

    if (el.status === "padding") return el;

    return {
      ...el,
      key: `${latKey}${key}${latKey}`,
      status: "false"
    };
  });

  return formatData;
};
console.log("wtest");
