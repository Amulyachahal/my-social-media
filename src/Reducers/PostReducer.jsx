export const PostReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_POSTS":
      return { ...state, allPosts: [...action.payload] };
    case "SET_CREATED_POSTS":
      return {
        ...state,
        createdPosts: [...state.createdPosts, action.payload],
      };
    case "IS_LIKED":
      return { ...state, liked: { ...state.liked, [action.payload]: true } };
    case "RESET_IS_LIKED":
      return { ...state, liked: {} };
    case "IS_DISLIKED":
      return { ...state, liked: { ...state.liked, [action.payload]: false } };
    case "SET_USER_POSTS":
      return { ...state, userPosts: [...action.payload] };
    case "SET_FOLLOWED_USER_POSTS":
      return {
        ...state,
        followedUserPosts: [...state.followedUserPosts, ...action.payload],
      };
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
