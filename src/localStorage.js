export const addToLocalStorage = (name, data) => {
  let temp = getFromLocalStorage("Notes");

  temp = temp ? [...temp, data] : [data];

  localStorage.setItem(name, JSON.stringify(temp));
};

export const getFromLocalStorage = (name) => {
  const data = JSON.parse(localStorage.getItem(name));
  return data;
};
