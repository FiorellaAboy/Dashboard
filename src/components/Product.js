import React, { Component } from "react";
import ProductList from "./ProductList";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        fetch("/api/products")
            .then(res => res.json())
            .then(products => this.setState({ products: products.data}))
            .catch(err => console.error(err))
            ;
    }

    render() {
        return(
            <React.Fragment>
                        {/*<!-- PRODUCTS LIST -->*/}
                        <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
                        
                        {/*<!-- DataTales Example -->*/}
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Titulo</th>
                                                <th>Calificación</th>
                                                <th>Premios</th>
                                                <th>Duración</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Id</th>
                                                <th>Titulo</th>
                                                <th>Calificación</th>
                                                <th>Premios</th>
                                                <th>Duración</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {
                                                this.state.products.map((product, index) => {
                                                    return <ProductList {...product} key={index} />
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>            
            </React.Fragment>
        )
    }
}
export default Product;