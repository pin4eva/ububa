import React from "react";
import { IProductsData } from "../interfaces";

const ProductCard: React.FC<{ product: IProductsData }> = ({ product }) => {
	return (
		<div className="product-card">
			<h5>{product.productTitle}</h5>
			<p>{product.productDesc}</p>
			<button className="btn-card btn-lg">Read more</button>
		</div>
	);
};

export default ProductCard;
