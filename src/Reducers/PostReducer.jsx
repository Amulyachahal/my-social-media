export const PostReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_POSTS":
      return { ...state, allPosts: [...action.payload] };

    case "IS_LIKED":
      return { ...state, liked: { ...state.liked, [action.payload]: true } };
    case "IS_DISLIKED":
      return { ...state, liked: { ...state.liked, [action.payload]: false } };
    case "SET_USER_POSTS":
      return { ...state, userPosts: [...action.payload] };
    case "DELETE_POST":
      return { ...state, allPosts: [...action.payload] };
    case "CANCEL_EDIT":
      return { ...state, isEditing: false };
    case "START_EDIT":
      return { ...state, isEditing: true, postData: { ...action.value } };
    case "SAVE_EDIT":
      return { ...state, allPosts: [...action.payload] };
    case "END_EDIT":
      return { ...state, isEditing: false };
    default:
      return { state };
  }
};
