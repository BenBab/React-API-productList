import React from "react";
import PropTypes from 'prop-types'

const propTypes = {
  product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        box_limit: PropTypes.string,
        list_price: PropTypes.tring,
        is_vatable: PropTypes.bool,
        is_for_sale: PropTypes.bool,
        age_restricted: PropTypes.bool,
        always_on_menu: PropTypes.bool,
    }),
    prodDesc: PropTypes.string,
    onClick: PropTypes.func
}

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

Product.propTypes = propTypes
Product.defaultProps = {
  prodDesc: "Description currently not available"
}

export default Product;

