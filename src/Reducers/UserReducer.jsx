export const UserReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_USERS":
      return { ...state, users: [...action.payload] };
    case "SET_USER":
      return { ...state, userData: { ...action.payload } };
    case "SET_BOOKMARK":
      return { ...state, userBookmark: [...action.payload] };
    case "ADD_IN_BOOKMARK":
      return {
        ...state,
        inBookmark: { ...state.inBookmark, [action.payload]: true },
      };
    case "REMOVE_IN_BOOKMARK":
      return {
        ...state,
        inBookmark: { ...state.inBookmark, [action.payload]: false },
      };
    case "FOLLOW":
      return {
        ...state,
        following: { ...state.following, [action.payload]: true },
      };
    case "FOLLOWED_USER":
      return {
        ...state,
        followedUser: {
          ...state,
          followedUsers: [...state.followedUsers, { ...action.payload }],
        },
      };
    case "UN_FOLLOW":
      return {
        ...state,
        following: { ...state.following, [action.payload]: false },
      };
    case "START_USER_EDIT":
      return { ...state, isEditing: true, postData: { ...action.value } };
    case "SAVE_USER_EDIT":
      return { ...state, isEditing: false, userData: { ...action.payload } };
    case "END_USER_EDIT":
      return { ...state, isEditing: false };
    default:
      return { state };
  }
};
