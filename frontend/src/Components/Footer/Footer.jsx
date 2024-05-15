import React from "react";
import './Footer.css';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div className="footer">

    {/* /<MDBFooter className='text-center' color='white' style={{ backgroundColor: '#aa6639' }}> */}

    <MDBFooter className='text-center' color='white' style={{ backgroundColor: '#381301' }}>

      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/mmhcl.clothing?mibextid=LQQJ4d&_rdc=2&_rdr' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.youtube.com/@MHCL_Clothing/featured' role='button'>
            <MDBIcon fab icon='youtube' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/mmhcl_clothing/?igsh=MWpjMjJldHpwMXRqNQ&utm_source=qr' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.tiktok.com/@mmhcl_clothing?_t=8j7s8Slf63E&_r=1' role='button'>
            <MDBIcon fab icon='tiktok' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://api.whatsapp.com/send/?phone=94769903005&text&type=phone_number&app_absent=0' role='button'>
            <MDBIcon fab icon='whatsapp' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            MHCL is the premier one-stop shop for all your branded clothing requirements in Sri Lanka.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>INFORMATION</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Brands
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    FAQ's
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>SITE LINKS</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Return & Exchange
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Gift Cards
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>MY ACCOUNT</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Shop
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Cart
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Checkout
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    My Account
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>CONTACT US</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Dial now for immediate support and peace of mind
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  +94 76 990 3005
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>


      {/* <div className='text-center p-3' style={{ backgroundColor: 'rgba(191,140,106)' }}> */}

      <div className='text-center p-3' style={{ backgroundColor: '#210b00' }}>

        © 2024 Copyright:
        <a className='text-white' href='https://mhcl.com/'>
          MHCL.com
        </a>
      </div>
    </MDBFooter>
    </div>
  );
};

export default Footer;
