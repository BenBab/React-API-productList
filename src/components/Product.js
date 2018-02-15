import React from "react";

function Product(props) {
  var { product } = props;
  var url = product.images[365].src;
  var closeItem = () => {
    props.onClick(props.product.id);
  };

  return (
    <div id={product.id} onClick={closeItem}>
      <div>
        <img className="avatar" src={url} alt={product.title} />
      </div>
      <div>
        <p className="product-text">{product.description}</p>
      </div>
      <p className="product-text">
        <b>Price: {product.list_price} </b>{" "}
        {!product.is_for_sale ? "  -- This item is currently out of stock" : ""}
      </p>
    </div>
  );
}

export default Product;
