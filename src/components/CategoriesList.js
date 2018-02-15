import React, { Component } from "react";
import SearchBox from "./SearchBox";
import ProductList from "./ProductList";

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      selectedList: [],
      filteredList: [],
      isExpanded: false,
      selectionMade: false,
      searchVal: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.listProducts = this.listProducts.bind(this);
    this.handleExpanded = this.handleExpanded.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const itemList = [];
    let prodID = event.target.id;
    this.props.loadedData.products.map(item => {
      return item.categories.map(i => {
        //console.log(prodID, i.id)
        if (prodID === i.id) {
          return itemList.push(item);
        }
        return item;
      });
    });
    this.listProducts(itemList);
  }

  listProducts(itemList) {
    this.setState({
      selectedList: itemList,
      filteredList: itemList,
      selectionMade: true,
      searchVal: ""
    });
  }

  handleExpanded(productID) {
    const nextProducts = this.state.filteredList.map(selection => {
      if (productID === selection.id) {
        let active = selection.isActive ? false : true;

        return Object.assign({}, selection, {
          isActive: active
        });
      } else {
        return selection;
      }
    });
    this.setState({
      filteredList: nextProducts
    });
  }

  handleSearch(value) {
    const list = [...this.state.selectedList];
    this.setState({ searchVal: value }, () => {
      var filteredData = list.filter(
        obj => obj.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      this.setState({ filteredList: filteredData });
    });
  }

  render() {
    if (this.state.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.state.isLoading) {
      return <p>Loading…</p>;
    }

    var categories = this.props.loadedData.categories;

    return (
      <div>
        {categories
          .filter(item => !item.hidden)
          .sort(function(item) {
            if (item.recently_added) {
              return -1;
            } else {
              return 1;
            }
          })
          .map(item => (
            <div
              id={item.id}
              className="top-bar"
              key={item.id}
              onClick={this.handleClick}
            >
              {item.title}
            </div>
          ))}

        <br />
        <br />
        <div>
          <SearchBox
            search={this.handleSearch}
            searchValue={this.state.searchVal}
            products={this.state.selectedList}
          />
          <br />
          <ProductList
            isExpanded={this.handleExpanded}
            products={this.state.filteredList}
            hasSelected={this.state.selectionMade}
          />
        </div>
      </div>
    );
  }
}
export default CategoriesList;
