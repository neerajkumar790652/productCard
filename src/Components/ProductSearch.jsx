import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductSearch() {
	const [productData, setProductData] = useState([]);

	useEffect(() => {
		getData();
	}, []);
	const getData = () => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data) =>
				//  console.log(data)
				setProductData(data)
			);
	};
	return (
		<div className="container">
			{productData.map((product) => (
				<div key={product.id} className="card" style={{ width: '12rem',height:'20rem' }}>
					<img src={product.image} className="card-img-top" alt="..." style={{width:"150px",height:"150px"}}/>
					<div className="card-body">
						<h5 className="card-title">{product.title}</h5>
						<p className="card-text">{product.price}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default ProductSearch;
