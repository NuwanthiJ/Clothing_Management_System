import React, { useState, useEffect } from 'react';
import './CSS/AllCart.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const AllCart = () => {
	const [cartItems, setCartItems] = useState([]);
	const [subTotal, setSubTotal] = useState(0);
	const [saved, setSaved] = useState(0);
	const [total, setTotal] = useState(0);
	const [searchQuery, setSearchQuery] = useState('');

	// Run fetchData function
	useEffect(() => {
		fetchData();
	}, []);

	// Fetch data from the backend
	const fetchData = async () => {
		try {
			const response = await fetch('http://localhost:3000/api/item/items');
			if (!response.ok) {
				throw new Error('Failed to get cart items');
			}
			const data = await response.json();
			setCartItems(data.existingProject);
		} catch (error) {
			console.log(error);
		}
	};

	// Calculate subtotal, total discount, and total cart value
	useEffect(() => {
		let subTotal = 0;
		let saved = 0;

		// Calculate subtotal and total discount
		cartItems.forEach((item) => {
			subTotal += item.oldPrice * item.quantity;
			saved += (item.oldPrice - item.price) * item.quantity;
		});

		setSubTotal(subTotal);
		setSaved(saved);
		setTotal(subTotal - saved);
	}, [cartItems]);

	// Generate PDF
	const generatePDF = (title, columns, data, fileName) => {
		const doc = new jsPDF();
		const tableRows = [];

		data.forEach((item) => {
			const rowData = [];
			columns.forEach((column) => {
				rowData.push(item[column.dataKey]);
			});
			tableRows.push(rowData);
		});

		doc.autoTable({
			columns: columns.map((c) => ({ title: c.header, dataKey: c.dataKey })),
			body: tableRows,
			margin: { top: 35 },
			didDrawPage: function (data) {
				doc.text(title, 20, 30);
			}
		});
		doc.save(fileName + '.pdf');
	};

	// Handle function to download PDF
	const handleDownloadPDF = () => {
		const title = `Cart Data Report (${cartItems.length})`;
		const columns = [
			{ header: 'Item Name', dataKey: 'topic' },
			{ header: 'Selected Size', dataKey: 'size' },
			{ header: 'Quantity', dataKey: 'quantity' },
			{ header: 'Old Price', dataKey: 'oldPrice' },
			{ header: 'New Price', dataKey: 'price' }
		];
		generatePDF(title, columns, cartItems, 'cart_data_report');
	};

	// Filter cart items based on search query
	const filteredCartItems = cartItems.filter((item) => item.topic.toLowerCase().includes(searchQuery.toLowerCase()));

	return (
		<div>
			{cartItems.length === 0 ? (
				<div className='no-item'>
					<p>No items yet...</p>
				</div>
			) : (
				<div>
					<h2 className='page-title'>All Cart Item List ({cartItems.length})</h2>
					{/* Search Input */}
					<div className=''>
						<input
							type='text'
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder='Search by name...'
							className='search-box'
						/>
					</div>
					{filteredCartItems.length === 0 && <p style={{ margin: '50px' }}>No items found...</p>}
					<div className='container-cart'>
						<div className='left'>
							{/* Cart item Card */}
							{filteredCartItems.map((item, index) => (
								<div className='cart-item' key={index}>
									<div className='cart-item-card'>
										<div className='card-left'>
											<img src={item.image} alt={item.topic} />
										</div>

										{/* Name and Delete Button */}
										<div className='card-right'>
											<div className='name-delete'>
												<h4 className='title'>{item.topic}</h4>
											</div>
											<div className='item-details'>
												<div className='new-old-price'>
													<p className='new-price'>LKR {item.price.toFixed(2)}</p>
													{/* <p className='old-price'>LKR {item.oldPrice.toFixed(2)}</p> */}
												</div>
												<div className='size-qty'>
													<p className='size'>Size: {item.size}</p>
													<p className='qty'>Quantity: {item.quantity}</p>
												</div>
												<div className='save-total'>
													<p className='save-price'>
														Discount LKR {((item.oldPrice - item.price) * item.quantity).toFixed(2)}
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
								<p>Total Discount</p>
								<p>LKR {saved.toFixed(2)}</p>
							</div>

							<div className='s-price s-total'>
								<p>Total Cart Value</p>
								<p>LKR {total.toFixed(2)}</p>
							</div>

							{/* Download Report */}
							<div className='download-btn'>
								<button className='dwn-btn2' onClick={handleDownloadPDF}>
									Download PDF
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AllCart;
