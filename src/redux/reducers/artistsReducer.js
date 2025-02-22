const initialState = {
  list: {
    content: ["u2", "bob dylan", "led leppelin"],
  },
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default artistsReducer;
