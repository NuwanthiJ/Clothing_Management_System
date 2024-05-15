import React, { useState } from 'react';
import Header from '../Header/Header'; // Update the path as needed
import Footer from '../Footer/Footer'; // Update the path as needed
import './CardDetails.css';

function CardDetails() {
  const [cardType, setCardType] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      setErrorMessage('');
      // Proceed with payment or other actions
      console.log('Payment successful');
      alert('Payment is successful!');
    }
  };

  const validateInputs = () => {
    const isValidAccountNo =
      (cardType === 'visa' && accountNo.startsWith('4')) ||
      (cardType === 'master' && (accountNo.startsWith('5') || accountNo.startsWith('2')));
    const isValidAccountNoLength = accountNo.length === 16;
    const isValidExpireDate = /^\d{2}\/\d{2}$/.test(expireDate);
    const isValidCvv = cvv.length === 3;

    if (!isValidAccountNo) {
      setErrorMessage('*Account number should start with 4 for Visa card and  5/2 for MasterCard.*');
      return false;
    }
    if (!isValidAccountNoLength) {
      setErrorMessage('*Account number should be 16 digits long.*');
      return false;
    }
    if (!isValidExpireDate) {
      setErrorMessage('*Expiry date should be in MM/YY format.*');
      return false;
    }
    if (!isValidCvv) {
      setErrorMessage('*CVV should be 3 digits.*');
      return false;
    }

    return true;
  };

  return (
    <div>
      <Header />
      <br />
      <form onSubmit={handleSubmit} className='form2'>
        <center>
          <h3 className='ctopic'>Payment</h3>
          <label>
            <b>Card type:</b>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="cardType" value="visa" onChange={(e) => setCardType(e.target.value)} required /> <b>Visa</b> &nbsp;&nbsp;&nbsp;
            <input type="radio" name="cardType" value="master" onChange={(e) => setCardType(e.target.value)} required /><b> Master</b>
          </label>
          <br />
          <br />
          <label>
            <input className='cinput' type="text" placeholder="Enter Card holder Name" value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)} required />
          </label>
          <br />
          <br />
          <label>
            <input type="text" className="cinput" placeholder="Enter Account no" value={accountNo} onChange={(e) => setAccountNo(e.target.value)} required />
          </label>
          <br />
          <br />
          <label>
            <input type="text" className="cinput" placeholder="MM/YY" value={expireDate} onChange={(e) => setExpireDate(e.target.value)} required />
          </label>
          <br />
          <br />
          <label>
            <input type="text" className="cinput" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
          </label>
          <br /><br />
          <br />
          <button className='cbutton' type="submit">Payment</button>
          {errorMessage && <p>{errorMessage}</p>}

        </center>
      </form>
      <br />
      <Footer />

    </div>
  )
}

export default CardDetails;
