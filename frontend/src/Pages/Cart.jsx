import React, { useState, useEffect } from 'react';
import './CSS/Cart.css';
import deleteImg from './delete.svg';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
	const [cartItems, setCartItems] = useState([]);
	const [subTotal, setSubTotal] = useState(0);
	const [saved, setSaved] = useState(0);
	const [total, setTotal] = useState(0);
	const [selectedItems, setSelectedItems] = useState([]);
	const [selectAll, setSelectAll] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [itemToDelete, setItemToDelete] = useState(null);
	const navigate = useNavigate();

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	// Run fetchData function
	useEffect(() => {
		fetchData();
	}, []);

	// Fetch data from the backend
	const fetchData = async () => {
		const userId = localStorage.getItem('userId');
		try {
			const response = await fetch(`http://localhost:8000/items/Item/${userId}`);
			if (!response.ok) {
				throw new Error('Failed to get cart items');
			}
			const data = await response.json();
			setCartItems(data.Item);
		} catch (error) {
			console.log(error);
		}
	};

	// Calculate total values of selected cart items
	useEffect(() => {
		const calculateTotal = () => {
			let subTotal = 0;
			let savedSum = 0;
			let total = 0;
			for (const item of cartItems) {
				if (selectedItems.includes(item._id)) {
					subTotal += item.subtotal;
					savedSum += (item.oldPrice - item.price) * item.quantity;
					total = subTotal - savedSum;
				}
			}
			setSubTotal(subTotal);
			setSaved(savedSum);
			setTotal(total);
		};
		calculateTotal();
	}, [cartItems, selectedItems]);

	// Update quantity in the cart
	const handleUpdateQuantity = async (id, quantity) => {
		try {
			const newQuantity = Math.max(1, quantity);
			const response = await fetch(`http://localhost:8000/items/Item/update/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					quantity: newQuantity,
					subtotal: newQuantity * cartItems.find((item) => item._id === id).oldPrice
				})
			});
			if (!response.ok) {
				throw new Error('Failed to update quantity');
			}
			fetchData();
		} catch (error) {
			console.log(error);
		}
	};

	// Function to handle size change
	const handleSizeChange = async (id, size) => {
		try {
			const newSize = size;
			const response = await fetch(`http://localhost:8000/items/Item/update/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					size: newSize
				})
			});
			if (!response.ok) {
				throw new Error('Failed to update size');
			}
			fetchData();
		} catch (error) {
			console.log(error);
		}
	};

	// Delete item from cart
	const handleDelete = async (id) => {
		setShowDeleteConfirmation(true);
		setItemToDelete(id);
	};

	// Confirm deletion
	const confirmDelete = async () => {
		try {
			const response = await fetch(`http://localhost:8000/items/Item/delete/${itemToDelete}`, {
				method: 'DELETE'
			});
			if (!response.ok) {
				throw new Error('Failed to delete item');
			}
			setCartItems(cartItems.filter((item) => item._id !== itemToDelete));
			setShowDeleteConfirmation(false);
			setItemToDelete(null);
		} catch (error) {
			console.log(error);
		}
		window.location.reload();
	};

	// Toggle selection for individual item
	const toggleSelection = (id) => {
		let updatedSelectedItems;
		if (selectedItems.includes(id)) {
			updatedSelectedItems = selectedItems.filter((itemId) => itemId !== id);
		} else {
			updatedSelectedItems = [...selectedItems, id];
		}
		setSelectedItems(updatedSelectedItems);

		// Check if all items are selected
		const allItemsSelected = updatedSelectedItems.length === cartItems.length;
		setSelectAll(allItemsSelected);
	};

	// Toggle select all
	const toggleSelectAll = () => {
		if (selectAll) {
			setSelectedItems([]);
		} else {
			const allItemIds = cartItems.map((item) => item._id);
			setSelectedItems(allItemIds);
		}
		setSelectAll(!selectAll);
	};

	// Checkout functions
	const handleCheckout = async () => {
		setShowModal(true);
	};

	const handleConfirm = () => {
		setShowModal(false);
		navigate('/checkout');
	};

	return (
		<div>
			{cartItems.length === 0 ? (
				<div>
					<div className='no-item'>
						<p>No items yet? Continue shopping to explore more.</p>
					</div>
					<div className='no-item'>
						<button onClick={() => navigate('/home')}>Continue Shopping</button>
					</div>
				</div>
			) : (
				<div>
					<h2 className='page-title'>Shopping Cart ({cartItems.length})</h2>
					<div className='container-cart'>
						<div className='left'>
							{/* Select all checkbox */}
							<div className='select-all'>
								<input type='checkbox' checked={selectAll} onChange={toggleSelectAll} />
								<label>Select All</label>
							</div>

							{/* Cart item Card */}
							{cartItems.map((item, index) => (
								<div className='cart-item' key={index}>
									<div className='cart-item-card'>
										{/* Checkbox for individual item */}
										<div className='checkbox'>
											<input
												type='checkbox'
												checked={selectedItems.includes(item._id)}
												onChange={() => toggleSelection(item._id)}
											/>
										</div>
										<div className='card-left'>
											<img src={item.image} alt={item.topic} />
										</div>

										{/* Name and Delete Button */}
										<div className='card-right'>
											<div className='name-delete'>
												<h4 className='title'>{item.topic}</h4>
												{/* Delete Button */}
												<div className='delete-img'>
													<button className='delete-btn' onClick={() => handleDelete(item._id)}>
														<img src={deleteImg} className='button-image' alt='Remove' />
													</button>
												</div>
											</div>
											<div className='item-details'>
												<div className='new-old-price'>
													<p className='new-price'>LKR {item.price.toFixed(2)}</p>
													<p className='old-price'>LKR {item.oldPrice.toFixed(2)}</p>
												</div>
												<div className='size-qty'>
													{/* Size Change */}
													<div className='size-dropdown'>
														<select
															value={item.size}
															onChange={(e) => handleSizeChange(item._id, e.target.value)}
														>
															<option value='S'>S</option>
															<option value='M'>M</option>
															<option value='L'>L</option>
															<option value='XL'>XL</option>
															<option value='XXL'>XXL</option>
														</select>
													</div>
													{/* <p className='size'>Size: {item.size}</p> */}
													{/* Update Qty */}
													<div className='qty'>
														<label>Qty:</label>
														<input
															type='number'
															value={item.quantity}
															onChange={(e) => handleUpdateQuantity(item._id, e.target.value)}
														/>
													</div>
												</div>
												<div className='save-total'>
													<p className='save-price'>
														Saved LKR {((item.oldPrice - item.price) * item.quantity).toFixed(2)}
													</p>
													<p className='total-price'>
														Total: LKR {(item.price * item.quantity).toFixed(2)}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						{/* Right Side Card */}
						<div className='right'>
							<h2>Summary</h2>

							<div className='s-price'>
								<p>Subtotal</p>
								<p>LKR {subTotal.toFixed(2)}</p>
							</div>

							<div className='s-price'>
								<p>Saved</p>
								<p>LKR {saved.toFixed(2)}</p>
							</div>

							<div className='s-price s-total'>
								<p>Total</p>
								<p>LKR {total.toFixed(2)}</p>
							</div>

							<div className='verify-checkout'>
								<input onChange={handleCheckboxChange} type='checkbox' />
								<label>Do you want to pay now?</label>
							</div>
							{/* Checkout Button */}
							<button onClick={handleCheckout} disabled={selectedItems.length === 0 || !isChecked}>
								Checkout ({selectedItems.length})
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Delete confirmation pop-up */}
			{showDeleteConfirmation && (
				<div className='cart-overlay'>
					<div className='cart-box'>
						<h3>Confirm Deletion</h3>
						<p>Are you sure you want to delete this item?</p>
						<button className='cancel-btn' onClick={() => setShowDeleteConfirmation(false)}>
							Cancel
						</button>
						<button onClick={confirmDelete}>Delete</button>
					</div>
				</div>
			)}

			{/* Checkout Verification Modal */}
			{showModal && (
				<div className='cart-overlay'>
					<div className='cart-box'>
						<h3>Confirm Checkout</h3>
						<p>Please confirm if you want to proceed with the checkout.</p>
						<button className='cancel-btn' onClick={() => setShowModal(false)}>
							Cancel
						</button>
						<button onClick={handleConfirm}>Pay Now</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
