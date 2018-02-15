import React, { Component } from 'react'
import CategoriesList from "../components/CategoriesList";

class AsyncBody extends Component {
  constructor() {
    super();
    this.state = {
      apiCount: 0,
      categories: [],
      products: [],
      isLoading: false,
      hasErrored: false,
    };
  }

  fetchData(url) {
    this.setState({ isLoading: true });
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .then(items => {
        if (this.state.apiCount === 0) {
          this.setState({ apiCount: 1, categories: items.data });
        } else {
          this.setState({ apiCount: 2, products: items.data });
        }
      })
      .catch(() => this.setState({ hasErrored: true }));
  }

  componentDidMount() {
    this.fetchData("https://api.gousto.co.uk/products/v2.0/categories");
    this.fetchData(
      "https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&i"
    );
  }

  render() {
      
    if (this.state.hasErrored) {
      return <p>Oops! Cannot load the items, you might not have access to the Api. Otherwise you may need to refresh the browser/ Cors extension </p>;
    }
    if (this.state.isLoading) {
      return <p>Loading…</p>;
    }
    return (
      <div>
        <CategoriesList loadedData={this.state}/>
      </div>
    );
  }
}


export default AsyncBody