import React, { Component } from "react";
import "./style.css";

class ProductOverview extends Component {
  render() {
    const { shop, picture, product, description, currentPrice, oldPrice } = this.props.data;
    console.log(this.props.data);
    return (
      <div className="productOverview">
        <div className="productOverview__header">
          <div className="productOverview__imgContainer">
            <img
              alt=""
              className="productOverview__img"
              src={picture}
            />
          </div>
          <div className="productOverview__baseInfo">
            <div className="productOverview__title">{product}</div>
            <div className="productOverview__content">
              {description}
            </div>
          </div>
        </div>
        <div className="productOverview__purchase">
          <span className="productOverview__symbol">¥</span>
          <span className="productOverview__price">{currentPrice}</span>
          <span className="productOverview__price--old">¥{oldPrice}</span>
          <a className="productOverview__btn">立即购买</a>
        </div>
        <ul className="productOverview__remark">
          <li className="productOverview__remarkItem">
            <i className="productOverview__sign1" />
            <span className="productOverview__desc">随时可退</span>
          </li>
          <li className="productOverview__remarkItem">
            <i className="productOverview__sign2" />
            <span className="productOverview__desc">过期自动退</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductOverview;
