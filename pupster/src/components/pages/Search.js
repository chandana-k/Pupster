import React, { Component } from "react";
import SearchResults from "../SearchResults"
import SearchForm from "../SearchForm"
import API from "../../utils/API"

class Search extends Component {

  componentDidMount() {
    API.search(`breed/${this.props.searchQuery}/images`)
      .then(res => {
        this.props.stateChange("searchResult", res.data.message);
        })
      .catch(err => console.log(err));
  };

  render(){
    return(
      <div className="container">
        <div className="jumbotron searchjumbo"><h1 className="text-right">Search for Dog Pics</h1></div>
        <SearchForm 
          handleInputChange={this.props.handleInputChange}
          value={this.props.searchQuery}
          handleFormSubmit={this.props.handleFormSubmit}/>
        <SearchResults 
          resultsArray={this.props.searchResult}/>
      </div>
    );
  };
}

export default Search;