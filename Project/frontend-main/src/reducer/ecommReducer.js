const ecommReducer = (state, action) => {
  var newState = {
    user: null,
    carts: [],
    cartSummary: null,
    amount: 0,
  };

  if (action.type === "user") {
    newState = {
      ...state,
      user: action.payload,
    };
  } else if (action.type === "carts") {
    newState = {
      ...state,
      carts: action.payload,
    };
  } else if (action.type === "amount") {
    newState = {
      ...state,
      amount: action.payload,
    };
  }

  return newState;
};

export default ecommReducer;
