import createReducer from "../../../utils/createReduce";

export const schema = {
  name: "keywords",
  id: "id"
};

const reducer = createReducer(schema.name);

export default reducer;
