export const pickByAll = () => dispatch => {
  dispatch({
    type: "PICK_BY_ALL"
  });
};

export const pickByFinished = () => dispatch => {
  dispatch({
    type: "PICK_BY_FINISHED"
  });
};
export const pickByUnfinish = () => dispatch => {
  dispatch({
    type: "PICK_BY_UNFINISH"
  });
};
export const sortByPriority = () => dispatch => {
  dispatch({
    type: "SORT_BY_PRIORITY"
  });
};
export const sortByEndDate = () => dispatch => {
  dispatch({
    type: "SORT_BY_END_DATE"
  });
};
// export const pickByAll = () => ({
//   type: "PICK_BY_ALL"
// });

// export const pickByFinished = () => ({
//   type: "PICK_BY_FINISHED"
// });

// export const pickByUnfinish = () => ({
//   type: "PICK_BY_UNFINISH"
// });

// export const sortByPriority = () => ({
//   type: "SORT_BY_PRIORITY"
// });

// export const sortByEndDate = () => ({
//   type: "SORT_BY_END_DATE"
// });

//TODO: dispatch it!!!
