import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    constructor(){
        super();

        this.isOpened = this.isOpened.bind(this)
        this.isClosed = this.isClosed.bind(this)
        this.handleExpanded = this.handleExpanded.bind(this)
    }

    isOpened(event){
        event.preventDefault();
        const productID = event.target.id
        this.handleExpanded(productID)  
    }

    isClosed(prodID){
        this.handleExpanded(prodID)
    }

    handleExpanded(productID){
        if (!productID){
            return;
        }else{
            this.props.isExpanded(productID)
        }    
    }

    render() {
        if (this.props.products.length === 0 && this.props.hasSelected){return(
             <div className="App-container">Currently no Items available for this category</div>
        )}
        return (
            <div className= "App-container">
                {this.props.products.map((product) => (
                    <div className="highlight" id={product.id} key={product.id} onClick={this.isOpened}>
                            {product.isActive ? <b>{product.title}</b>: product.title }
                        <div>
                            {product.isActive && <Product product={product} onClick={this.isClosed}/> }
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

