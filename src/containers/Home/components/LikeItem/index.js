import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default class LikeItem extends Component {
  render() {
    const {
      shop,
      tag,
      picture,
      product,
      currentPrice,
      oldPrice,
      saleDesc,
      id
    } = this.props.data;
    return (
      <Link to={`/detail/${id}`} className="likeItem">
        <div className="likeItem__picContainer">
          <div className="likeItem__picTag">{tag}</div>
          <img src={picture} alt={shop} className="likeItem__pic" />
        </div>
        <div className="likeItem__content">
          <div className="likeItem__shop">{shop}</div>
          <div className="likeItem__product">{product}</div>
          <div className="likeItem__detail">
            <div className="likeItem__price">
              <ins className="likeItem__currentPrice">{currentPrice}</ins>
              <del className="likeItem__oldPrice">{oldPrice}</del>
            </div>
            <div className="likeItem__sale">{saleDesc}</div>
          </div>
        </div>
      </Link>
    );
  }
}
