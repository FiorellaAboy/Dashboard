import React from 'react';

const ProductList = (props) => {
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{props.rating}</td>
                <td>{props.awards}</td>
                <td>{props.length}</td>
            </tr>
        </React.Fragment>
    )
}

export default ProductList;