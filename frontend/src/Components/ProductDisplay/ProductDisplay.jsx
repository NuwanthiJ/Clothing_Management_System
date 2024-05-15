import React, { useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ProductDisplay = (props) => {
	const { product } = props;
	const [selectedSize, setSelectedSize] = useState('M');
	const [Qty, setQty] = useState(1);
	const userId = localStorage.getItem('userId');
	const navigate = useNavigate();

	const handleSizeSelect = (size) => {
		setSelectedSize(size);
	};

	const qtyHandler = (e) => {
		const newQty = parseInt(e.target.value);
		if (!isNaN(newQty) && newQty >= 1) {
			setQty(newQty);
		}
	};

	const handleClick = () => {
		const itemData = {
			userId: userId,
			topic: product.name,
			image: product.image,
			size: selectedSize,
			quantity: Qty,
			price: product.new_price,
			oldPrice: product.old_price,
			subtotal: product.old_price * Qty
		};

		// Send data to backend API
		fetch('http://localhost:3000/api/item/save', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(itemData)
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				navigate('/cart');
				window.location.reload();
			})
			.catch((error) => {
				console.error('Error:', error);
				toast.error('Failed to add item to cart!');
				// Handle error here
			});
	};

	return (
		<div className='productdisplay'>
			<Toaster position='top-center' reverseOrder={false}></Toaster>
			<div className='productdisplay-left'>
				<div className='productdisplay-img-list'>
					<img src={product.image} alt='' />
					<img src={product.image} alt='' />
					<img src={product.image} alt='' />
					<img src={product.image} alt='' />
				</div>
				<div className='productdisplay-img'>
					<img className='productdisplay-main-img' src={product.image} alt='' />
				</div>
			</div>
			<div className='productdisplay-right'>
				<h2>{product.name}</h2>
				<div className='productdisplay-right-star'>
					<img src={star_icon} alt='' />
					<img src={star_icon} alt='' />
					<img src={star_icon} alt='' />
					<img src={star_icon} alt='' />
					<img src={star_dull_icon} alt='' />
				</div>
				<div className='productdisplay-right-prices'>
					<div className='productdisplay-right-price-old'>LKR {product.old_price}</div>
					<div className='productdisplay-right-price-new'>LKR {product.new_price}</div>
				</div>
				<div className='productdisplay-right-size'>
					<h3>Select Size</h3>
					<div className='productdisplay-right-sizes'>
						<div className={selectedSize === 'S' ? 'selected' : ''} onClick={() => handleSizeSelect('S')}>
							S
						</div>
						<div className={selectedSize === 'M' ? 'selected' : ''} onClick={() => handleSizeSelect('M')}>
							M
						</div>
						<div className={selectedSize === 'L' ? 'selected' : ''} onClick={() => handleSizeSelect('L')}>
							L
						</div>
						<div className={selectedSize === 'XL' ? 'selected' : ''} onClick={() => handleSizeSelect('XL')}>
							XL
						</div>
						<div className={selectedSize === 'XXL' ? 'selected' : ''} onClick={() => handleSizeSelect('XXL')}>
							XXL
						</div>
					</div>
				</div>
				{/* Quantity input */}
				<div className='productdisplay-quantity'>
					<input type='number' value={Qty} onChange={qtyHandler} min={1} />
					<p>LKR {(product.new_price * Qty).toFixed(2)}</p>
				</div>

				{/* <span>Quentity: {Qty}</span> */}
				{/* <span>Size: {selectedSize}</span> */}

				{/* Add to Cart Button */}
				<button className='productdisplay-right-button' onClick={handleClick}>
					ADD TO CART
				</button>
			</div>
		</div>
	);
};

export default ProductDisplay;
