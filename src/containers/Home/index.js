import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Category from "./components/Category";
import Headline from "./components/Headline";
import Discount from "./components/Discount";
import Likelist from "./components/Likelist";
import HomeHeader from "./components/HomeHeader";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import {
  actions as homeActions,
  getLikes,
  getDiscounts,
  getPageCountOfLikes
} from "../../redux/modules/home";
const mapStateToProps = (state, props) => {
  return {
    likes: getLikes(state),
    discounts: getDiscounts(state),
    pageCount: getPageCountOfLikes(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  };
};

class Home extends Component {
  componentDidMount() {
    this.props.homeActions.loadDiscounts();
  }

  fetchMoreLikes = () => {
    this.props.homeActions.loadLikes();
  };
  render() {
    const { likes, discounts, pageCount } = this.props;
    return (
      <div>
        <HomeHeader />
        <Banner />
        <Category />
        <Headline />
        <Discount data={discounts} />
        <Likelist
          data={likes}
          pageCount={pageCount}
          fetchData={this.fetchMoreLikes}
        />
        <Footer />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
