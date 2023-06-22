export const PostReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_POSTS":
      return { ...state, posts: [...action.payload] };

    default:
      return { state };
  }
};
