import { React } from "react";
import products from "../../data/products";
import "./ProductsTable.css";

const ProductsTable = (props) => {
    const productsItens = products.map((product, i) => {
        return (
            <tr key={product.id} className={i % 2 === 0 ? "Even" : ""}>
                <td> {product.id} </td>
                <td> {product.desc} </td>
                <td> R$ {product.price.toFixed(2).replace(".", ",")} </td>
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr className="tableHeader">
                    <td>Id</td>
                    <td>Description</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>{productsItens}</tbody>
        </table>
    );
};

export default ProductsTable;
