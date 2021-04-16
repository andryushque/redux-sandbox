export const inc = () => ({ type: "INC" });
export const dec = () => ({ type: "DEC" });
export const res = () => ({ type: "RES" });
export const rnd = () => {
  const randomValue = Math.floor(Math.random() * 10);
  return { type: "RND", payload: randomValue };
};
