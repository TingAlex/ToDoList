const filtersReducerDefaultState = {
  sortBy: "priority",
  pickBy: "all"
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SORT_BY_PRIORITY":
      return { ...state, sortBy: "priority" };
    case "SORT_BY_END_DATE":
      return { ...state, sortBy: "end_date" };
    case "PICK_BY_FINISHED":
      return { ...state, pickBy: "finished" };
    case "PICK_BY_ALL":
      return { ...state, pickBy: "all" };
    case "PICK_BY_UNFINISH":
      return { ...state, pickBy: "unfinish" };
    default:
      return state;
  }
};

export default filtersReducer;
