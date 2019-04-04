import { schema as shopSchema, getShopById } from "./entities/shops";
import { FETCH_DATA } from "../middleware/api";
import { combineReducers } from "redux";
import { schema as productSchema, getProductDetail, getProductById } from "./entities/products";
import url from "../../utils/url";
export const types = {
  //获取产品详情
  FETCH_PRODUCT_DETAIL_REQUEST: "DETAIL/FETCH_PRODUCT_DETAIL_REQUEST",
  FETCH_PRODUCT_DETAIL_SUCCESS: "DETAIL/FETCH_PRODUCT_DETAIL_SUCCESS",
  FETCH_PRODUCT_DETAIL_FAILURE: "DETAIL/FETCH_PRODUCT_DETAIL_FAILURE",
  //关联店铺信息
  FETCH_SHOP_REQUEST: "DETAIL/FETCH_SHOP_REQUEST",
  FETCH_SHOP_SUCCESS: "DETAIL/FETCH_SHOP_SUCCESS",
  FETCH_SHOP_FAILURE: "DETAIL/FETCH_SHOP_FAILURE"
};
export const action = {
  loadProductDetail: id => {
    return (disptach, getState) => {
      const product = getProductDetail(getState(), id);
      if (product) {
        return disptach(fetchProductDetailSuccess);
      }
      const endpoint = url.getProductDetail(id);
      return disptach(fetchProductDetail(endpoint, id));
    };
  },
  // 获取店铺信息
  loadShopById: id => {
    return (dispatch, getState) => {
      //缓存优化
      const shop = getShopById(getState(), id);
      if (shop) {
        return dispatch(fetchShopSuccess(id));
      }
      const endpoint = url.getShopById(id);
      return dispatch(fetchShopById(endpoint, id));
    };
  }
};
const fetchProductDetail = (endpoint, id) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_PRODUCT_DETAIL_REQUEST,
      types.FETCH_PRODUCT_DETAIL_SUCCESS,
      types.FETCH_PRODUCT_DETAIL_FAILURE
    ],
    endpoint,
    schema: productSchema
  },
  id
});
const fetchShopById = (endpoint, id) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_SHOP_REQUEST,
      types.FETCH_SHOP_SUCCESS,
      types.FETCH_SHOP_FAILURE
    ],
    endpoint,
    schema: shopSchema
  },
  id
});

const fetchProductDetailSuccess = id => ({
  type: types.FETCH_PRODUCT_DETAIL_SUCCESS,
  id
});

const fetchShopSuccess = id => ({
  type: types.FETCH_SHOP_SUCCESS,
  id
});
const initialState = {
  product: {
    isFetching: false,
    id: null
  },
  relatedShop: {
    id: null,
    isFetching: false
  }
};
//商品reducer
const product = (state = initialState.product, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCT_DETAIL_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_PRODUCT_DETAIL_SUCCESS:
      return { ...state, id: action.id, isFetching: false };
    case types.FETCH_PRODUCT_DETAIL_FAILURE:
      return { ...state, isFetching: false, id: null };
    default:
      return state;
  }
};
//店铺reducer
const relatedShop = (state = initialState.product, action) => {
  switch (action.type) {
    case types.FETCH_SHOP_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_SHOP_SUCCESS:
      return { ...state, id: action.id, isFetching: false };
    case types.FETCH_SHOP_FAILURE:
      return { ...state, isFetching: false, id: null };
    default:
      return state;
  }
};
const reducer = combineReducers({
  product,
  relatedShop
});
export default reducer;

//selectors
//获取商品详情信息
export const getProduct = (state, id) => {
  return getProductDetail(state, id);
}
export const getRelatedShop = (state, productId) => {
  const product = getProductById(state, productId);
  let shopId = product ? product.nearestShop : null;
  if(shopId) {
    return getShopById(state, shopId);
  }
  return null;
}
//获取关联店铺信息
