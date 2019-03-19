import React, { Component } from "react";
import Category from "./components/Category";
import Headline from "./components/Headline";
import Discount from "./components/Discount";
import Likelist from "./components/Likelist";
import './style.css';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Category />
        <Headline / >
        <Discount />
        <Likelist />
      </div>
    );
  }
}
