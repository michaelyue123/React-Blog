export default (state = [], action) => {
  // reducers can return any values except undefined!!!
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};