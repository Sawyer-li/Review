import { combineReducers } from "redux";
import products from "./products";
import orders from "./orders";
import comments from "./comments";
import shops from "./shops";

const rootReducer = combineReducers({
    products,
    orders,
    comments,
    shops
})
export default rootReducer;