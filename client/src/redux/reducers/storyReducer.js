const initialState = {
  stories: [],
  loading: false,
};

export const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_STORIES': {
      return {
        ...state,
        stories: action.payload,
        loading: false,
      };
    }
    case 'CREATE_STORY': {
      return {
        ...state,
        stories: [...state.stories, action.payload],
      };
    }
    case 'LIKE_STORY':
    case 'EDIT_STORY': {
      return {
        ...state,
        stories: state.stories.map((story) =>
          story._id === action.payload._id ? action.payload : story
        ),
      };
    }

    case 'DELETE_STORY': {
      return {
        ...state,
        stories: state.stories.filter((story) => story._id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
