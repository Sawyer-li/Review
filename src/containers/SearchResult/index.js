import React, { Component } from 'react'
import ShowList from "./componetns/ShopList";
import SearchHeader from "./componetns/SearchHeader";
import KeywordBox from "./componetns/KeywordBox";
import Banner  from "../../components/Banner";
export default class SearchResult extends Component {
  render() {
    return (
      <div>
        <SearchHeader onBack={this.handleBack} onSearch={this.handleSearch} />
        <KeywordBox text="text" />
        <Banner dark />
        <ShowList /> 
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
