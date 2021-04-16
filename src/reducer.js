const reducer = (state = 0, action) => {
  const { type, randomValue } = action;

  switch (type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RES":
      return 0;
    case "RND":
      return state + randomValue;
    default:
      return state;
  }
};

export default reducer;
