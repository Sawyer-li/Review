import React, { Component } from 'react'
import ShowList from "./componetns/ShopList";
import SearchHeader from "./componetns/SearchHeader";
import KeywordBox from "./componetns/KeywordBox";
import Banner  from "../../components/Banner";
import {connect} from "react-redux";
import {getSearchedShops, getCurrentKeyword } from "../../redux/modules/search";

class SearchResult extends Component {
  render() {
    const { shops, currentKeyword } = this.props;
    return (
      <div>
        <SearchHeader onBack={this.handleBack} onSearch={this.handleSearch} />
        <KeywordBox text={currentKeyword} />
        <Banner dark /> 
        <ShowList data={shops} /> 
      </div>
    )
  }
  handleBack = () => {
    this.props.history.push('/'); 
  }
  handleSearch = () =>  {
    this.props.history.push('/search');
  }
}
const mapStateToProps = (state, props) => {
  return {
    shops: getSearchedShops(state),
    currentKeyword: getCurrentKeyword(state)
  }
}
export default connect(mapStateToProps,null)(SearchResult);