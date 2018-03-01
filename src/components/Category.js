import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    category: PropTypes.shape({
        title: PropTypes.string.isRequired,
        box_limit: PropTypes.number,
        is_default: PropTypes.bool,
        recently_added: PropTypes.bool,
        hidden: PropTypes.bool,
    }),
    onClick: PropTypes.func
}

function Category(props) {
    var { category } = props;
    return (
        <div
              id={category.id}
              className="top-bar"
              onClick={props.onClick}
            >
              {category.title}
        </div>
    )
}

Category.propTypes = propTypes

export default Category
