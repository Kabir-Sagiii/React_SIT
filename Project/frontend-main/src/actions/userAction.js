const userActionCreator = (data) => {
  return { type: "user", payload: data };
};

export default userActionCreator;
