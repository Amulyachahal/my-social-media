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
      return { ...state, isEditing: false, allPosts: [...action.payload] };
    case "SHOW_POST":
      return {
        ...state,
        showPost: true,
        id: action.id,
        singlePost: { ...action.value },
      };
    case "HIDE_POST":
      return { ...state, showPost: false };
    case "SORT_POST":
      state.allPosts.map((post) => console.log(post.createdAt)); // state.allPosts.sort();
      return { ...state, sortValue: action.payload };
    default:
      return { state };
  }
};
