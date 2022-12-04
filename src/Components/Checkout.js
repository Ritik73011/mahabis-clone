import React, { useState, useEffect, useCallback} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CountryCode } from './CountrtyCode';
import './CSSS/Chekout.css';
// import './CSSS/signup.css';
import CardDate from './CardDate';
import { NavLink, useNavigate } from 'react-router-dom';


const Ckeckout = () => {

    const [detail, setDetail] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [coupon1, setCoupon1] = useState(totalPrice);
    const [card, setCard] = useState({
        num:'',
        exDate:'',
        cvv:''
    });

    // ==============toast========
    const [toast, setToast] = useState(0);
    const navigate1 = useNavigate();

    const [tst, setTst] = useState(1);
    const [toastData, setToastData] = useState({
        icon: '',
        message: ''
    });


    const toastsh = useCallback((i, m, t) => {
        setToastData({
            icon: i,
            message: m
        })
        setTst(0);
        setTimeout(() => {
            setTst(1);
            navigate1(t);
        }, 5000)
    }, []);

    const transfer = () => {
        localStorage.setItem("login", true);
        toastsh("✅", 'Order Placed !! 📦', "/orderplaced");

    }

    // ===============


    const check = {
        fullName:'',
        email: '',
        address: '',
        city: '',
        pin: '',
        phone:''
    }

    /*const items = [{
        image: 'https://cdn.shopify.com/s/files/1/0238/5795/products/MC-F-DG-SR-2.jpg?v=1636102007',
        title: 'mahabis classic in larvik dark grey x sahara red (pre-order)',
        quantity:1,
        price:10100.00,
    },
        {
            image: 'https://cdn.mahabis.com/website/plp/images/MU-C-DG-SB-2.jpg?43',
            title: 'mahabis classic in larvik dark grey x sahara red (pre-order)',
            quantity: 1,
            price: 3010.50,
        }
    ]*/

    let items = JSON.parse(localStorage.getItem("cart")) || [];


    useEffect(() => {
        sumPrice();
        setCoupon1(totalPrice);
    }, [])
    const sumPrice = () => {
        items.map((d) => {
            return setTotalPrice((p) => (p + parseInt(d.price)));
        })
    }

    console.log(totalPrice);

    const Input1 = ({ ind, detail }) => {
        // console.log(ind.label)

        return (
            <div>

                <Box
                    component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '90%' }, }}
                    noValidate
                    autoComplete="on"
                >
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label={ind.label}
                            value={detail}
                            // defaultValue="Hello World"
                        />
                    </div>
                </Box>

            </div>
        )

    }


    const coupon = () => {
        alert("🎉🎉 COUPON 'SONU20' is applied 🎉🎉");
        let afterCoupon = totalPrice - (totalPrice * 20) / 100;
        setCoupon1(afterCoupon);
        setDetail(1);
    }


    return (
        <div className='checkMain'>

            <div className='orderSummary'>
                <p id='bill'>Order Summary</p>


                {items.map((d, id) => {
                    return (
                        <div className='item1' key={ id}>
                            <div>
                                <img src={d.image.img1} alt='pdr' width='100' height='100' />
                            </div>
                            <div style={{ width: '60%' }}>
                                <p style={{fontWeight:"500"}}>{ d.title}</p>
                                <p style={{ fontSize: '12px' }}>Quantity : { '1'}</p>
                                <p style={{ fontSize: '12px' }}>Price : ₹ { d.price}</p>
                            </div>
                        </div>

                    )
                }) }

            </div>
            <hr  className='hr'/>
            <br/>
            <h3 style={{ float: 'right',fontWeight:600,fontSize:"18px" }}> Items total : ₹ { totalPrice}</h3>
            <br />
            <br />
            <hr className='hr'/>



            <div className='billingAnddelivery'>
                <div className='billing'>
                    <p id='bill'>Billing address</p>
                    <Input1 ind={{ label: 'Full Name' }} />
                    <Input1 ind={{ label: 'Email' }} />
                    <Input1 ind={{ label: 'Address' }} />
                    <Input1 ind={{ label: 'City / suburb' }} />
                    <Input1 ind={{ label: 'Zip / postcode' }} />
                    <CountryCode/>
                </div>
                <div className='delivery'>
                    <div>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Default (same as billing address)" />
                            <FormControlLabel control={<Checkbox />} label="Add an alternative delivery address" />
                        </FormGroup>
                    </div>
                    <div>
                        <p id='bill'>Delivery address</p>
                        <Input1 ind={{ label: 'Full Name' }} />
                        <Input1 ind={{ label: 'Email' }} />
                        <Input1 ind={{ label: 'Address' }} />
                        <Input1 ind={{ label: 'City / suburb' }} />
                        <Input1 ind={{ label: 'Zip / postcode' }} />
                        <CountryCode />
                    </div>
                </div>
            </div>

            <div className='shippingMethod'>
                <div>
                    <p id='ship1'>Shipping method <span style={{ color: 'red'}} >*</span></p>
                </div>

                <div className='shipC1'>
                    <div>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="₹ 508.10"/>
                    </div>
                    <div>
                        <p>Standard courier<br></br><i>9 to 11 business days</i></p>
                    </div>
                </div>

                <div className='shipC1'>
                    <div>
                        <FormControlLabel control={<Checkbox />} label="₹ 1524.30" />
                        <br></br><i>pre-payment of duties and taxes supported</i>
                    </div>
                    <div>
                        <p>express courier (air)<br></br><i>4 to 9 business days</i></p>
                    </div>

                </div>
                
            </div>
            <hr className='hr' />
            
            <div className='billingSummary'>

                <p id='ship1'> 📝 Billing Summary </p>

                <i>Would you like to use your gift card? 🎁</i>

                <div className='coupon1'>
                    <div><p id='cop1'>Coupon available</p></div>
                    <div style={{width:'150px'}}>
                        <button class="custom-btn btn-12" onClick={() =>coupon()}><span ><NavLink to='#' id='createAccounti'>Apply</NavLink></span><span id='createAccounti'>SONU20</span></button>
                        </div>
                </div>

                <div className='total1'>
                    <div className='tot1'>
                        <p id='tot2'>Total</p>
                        <p id='tot3'><i>₹ { totalPrice}</i></p>
                    </div>
                    <div className='tot1'>
                        <p id='tot2'>Shipping</p>
                        <p id='tot3'><i>₹ 508.10</i></p>
                    </div>

                    <div className='tot1'>
                        <p id='tot2'>Total for your order</p>
                        <p id='tot3'><i>₹ {detail ? coupon1 : totalPrice+508.10}</i></p>
                    </div>

                    <i style={{ color: 'grey', fontSize:'12px'}}>Local taxes, duties or customs clearance fees may apply</i>
                </div>


            </div>

            <hr className='hr'/>
            <div className='payment1'>
                <div>
                    <p id='ship1'>Payment <span style={{ color: 'red' }} >💸</span></p>
                </div>

                <div>
                    <i>Please choose your payment method</i>
                    <div className='payimg'>
                        <div style={{border:'1px solid blue', width:'130px'}}>
                        <img src='https://e7.pngegg.com/pngimages/415/124/png-clipart-mastercard-visa-bank-card-payment-mastercard-text-service.png' width='100%' alt='visa' />
                        </div>

                        <div style={{ width: '130px' }}>
                            <img src='https://w7.pngwing.com/pngs/643/686/png-transparent-paypal-android-payment-paypal-blue-angle-service.png' width='100%' heigh='40' alt='visa' />
                        </div>
                    </div>
                </div>

                <div className='allpaylogo'>
                    <img src='https://www.theorchardcottage.co.nz/wp-content/uploads/2018/09/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos.png' alt='pay' width='90' height='30' />
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYol8jEyLTlI4Fl3hgJLSmFdAsNsHYOTjnhSxQ1d9p7y9QGjGTa5JaPSUXL2M6HuCgDyY&usqp=CAU' alt='pay' width='50' height='25' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Diners_Club_Logo3.svg' alt='pay' width='70' height='30' />
                </div>

                <div className='pay1'>
                    <p style={{fontWeight:600, fontSize:'20px'}}>Fill card details :</p>

                    <div className='paybox1'>
                        <div>
                            <TextField type='number' sx={{ width: '95%' }}
                                label="Card Number 💳"
                                placeholder="Type in here…"
                                variant="outlined"
                                color="primary"
                        />
                        </div>

                        <div>
                            <CardDate />
                        </div>
                        <div>
                            <TextField type='number' sx={{ width: '95%' }}
                                label="CVV Number 💳"
                                placeholder="Type in here…"
                                variant="outlined"
                                color="primary"
                            />
                        </div>

                    </div>

                    <div>
                        <div style={{width:'40%', margin:'auto', marginTop:"20px"}}>
                            <NavLink to='#' id='createAccounti'><button class="custom-btn btn-12" onClick={()=>transfer()}><span style={{fontSize:'20px'}}>Click!</span><span id='createAccounti'>Pay & place order</span></button></NavLink>
                        </div>
                    </div>

                </div>
                <i style={{ color: 'grey', fontSize: '10px' }}>
                    *By clicking pay and place order, you agree to purchase your item(s) from global-e as merchant of record for this transaction, on global-e’s terms and conditions and privacy policy. global-e is an international fulfilment service provider to mahabis.
                </i>

            </div>

            <div style={{marginTop:"50px", textAlign:'center', cursor:'pointer'}}>
                <span style={{color:'grey',fontSize:'12px'}}>Contact Us</span>
                <span style={{color:'green', fontSize:'15px'}}> | </span>
                <span style={{ color: 'grey', fontSize: '12px' }}>Help</span>
                <span style={{ color: 'green', fontSize: '15px' }}> | </span>
                <span style={{ color: 'grey', fontSize: '12px' }}>Terms & conditions</span>
                <span style={{ color: 'green', fontSize: '15px' }}> | </span>
                <span style={{ color: 'grey', fontSize: '12px' }}> Privacy policy</span>

            </div>

            <div style={{marginTop:'20px', textAlign:'center'}}>
                <img src="https://www.global-e.com/sectigo_trust_seal_sm_82x32.png" alt="logo" />
            </div>

            <div>
            </div>

            <div>
                <div id="toast" className={tst ? "oops" : "show"}><div id="img">{toastData.icon}</div><div id="desc">{toastData.message}</div></div>
            </div>


        </div>
    )
}

export default Ckeckout;
