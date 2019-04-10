import React, { Component } from "react";
import './style.css';

export default class PopularSearch extends Component {
  render() {
    const { popularKeywords } = this.props;
    return (
      <div className="popularSearch">
        {popularKeywords.map((item) => {
          return <span className="popularSearch__item" key={item.id} onClick={this.handleClick.bind(this,item)}>{item.keyword}</span>;
        })}
      </div>
    )
  }
  handleClick = (item) => {
    this.props.onClickItem(item);
  }
}
