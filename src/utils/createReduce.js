const createReduce = (name) => {
  return (state = {}, action) => {
    if (action.response && action.response[name]) {
      console.log(name);
      console.log(action.response[name]);
      return { ...state, ...action.response[name]};
    }
    return state;
  };
};
export default createReduce;