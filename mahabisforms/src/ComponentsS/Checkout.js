import React, { useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CountryCode } from './CountrtyCode';
import './CSSS/Chekout.css';


// -----------
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { MonthPicker } from '@mui/x-date-pickers';



const Ckeckout = () => {

    const [detail, setDetail] = useState();

    const check = {
        fullName:'',
        email: '',
        address: '',
        city: '',
        pin: '',
        phone:''

    }

    const Input1 = ({ ind, detail }) => {
        console.log(ind.label)

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


    return (
        <div className='checkMain'>
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
                            <FormControlLabel control={<Checkbox />} label="Default (same as billing address)" />
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
                        <FormControlLabel control={<Checkbox />} label="Rs. 508.10"/>
                    </div>
                    <div>
                        <p>Standard courier<br></br><i>9 to 11 business days</i></p>
                    </div>
                </div>

                <div className='shipC1'>
                    <div>
                        <FormControlLabel control={<Checkbox />} label="Rs. 1524.30" />
                        <br></br><i>pre-payment of duties and taxes supported</i>
                    </div>
                    <div>
                        <p>express courier (air)<br></br><i>4 to 9 business days</i></p>
                    </div>

                </div>
                
            </div>
            <hr/>

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

                    <div>
                        <TextField type='number' sx={{width:'50%'}}
                        label="Card Number 💳"
                        placeholder="Type in here…"
                        variant="outlined"
                        color="primary"
                        />
                    </div>

                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MonthPicker />
                        </LocalizationProvider>
                    </div>



                </div>

            </div>



        </div>
    )
}

export default Ckeckout;
