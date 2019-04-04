import { schema as shopSchema, getShopById } from "./entities/shops";
import {FETCH_DATA} from "../middleware/api"
import { schema as productSchema, getProductDetail } from "./entities/products";
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

const reducer = (state = {}, action) => {
  return state;
};
export default reducer;
