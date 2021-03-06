import React, { Component } from "react";
import LikeItem from "../LikeItem";
import Loading from "../../../../components/Loading";
import "./style.css";

export default class Likelist extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.removeListener = false;
  }
  render() {
    const { data, pageCount } = this.props;
    return (
      <div ref={this.myRef} className="likeList">
        <div className="likeList__header">猜你喜欢</div>
        <div className="likeList__list">
          {data.map((item, index) => {
            return <LikeItem key={index} data={item} />;
          })}
        </div>
        {pageCount < 3 ? (
          <Loading />
        ) : (
          <a href="/" className="likeList__viewAll">
            加载更多
          </a>
        )}
      </div>
    );
  }
  componentDidMount() {
    if(this.props.pageCount < 3){
     document.addEventListener("scroll", this.handleScroll);
    }else{
      this.removeListener = true;
    }
    if(this.props.pageCount === 0){
      this.props.fetchData();
    }
  }
  componentDidUpdate() {
    if (this.props.pageCount >= 3 && !this.removeListener) {
      document.removeEventListener("scroll", this.handleScroll);
      this.removeListener = true;
    }
  }
  componentWillUnmount() {
    if(!this.removeListener)
     document.removeEventListener("scroll", this.handleScroll);
  }
  //处理滚动事件实现加载更多
  handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const screenHeight = document.documentElement.clientHeight;
    const likeListTop = this.myRef.current.offsetTop;
    const likeListHeight = this.myRef.current.offsetHeight;
    //当下拉到底部时
    if (scrollTop + 45 >= likeListHeight + likeListTop - screenHeight) {
      this.props.fetchData();
    }
  };
}
