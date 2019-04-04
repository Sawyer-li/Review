import React, { Component } from "react";
import ProductOverview from "./components/ProductOverview"
import ShopInfo from "./components/ShopInfo";
import Detail from "./components/Detail";
import Remark from './components/Remark';
import BuyBotton from './components/BuyBotton';

export default class ProductDetail extends Component {
  render() {
    return (
      <div>
        <ProductOverview />
        <ShopInfo />
        <Detail />
        <Remark />
        <BuyBotton />
      </div>
    );
  }
}
