export const UserReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_USERS":
      return { ...state, users: [...action.payload] };
    case "SET_BOOKMARK":
      return { ...state, userBookmark: [...action.payload] };
    case "ADD_IN_BOOKMARK":
      return {
        ...state,
        inBookmark: { ...state.inBookmark, [action.payload]: true },
      };
    case "REMOVE_IN_BOOKMARK":
      return { ...state.inBookmark, [action.payload]: false };
    default:
      return { state };
  }
};
