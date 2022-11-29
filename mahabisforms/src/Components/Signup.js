import React, { memo, useState } from 'react';
import './signup.css';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



function Signup(){

    const [signup, setSignup] = useState({
        firstName:'',
        lastName: '',
        email: '',
        password: '',
        showPassword:'',
    });

    // const [values, setValues] = useState({
    //     password: '',
    //     showPassword:'',
    // });

    const handleChange = (event) => {
        // setSignup({ ...signup, [event.target.name]: event.target.value });
    };
    console.log(signup.password)

    const handleClickShowPassword = () => {
        setSignup({
            ...signup,
            showPassword: !signup.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onchange = (e) => {
        setSignup(signup => ({ ...signup, [e.target.name]: e.target.value}));
    }
    console.log(signup.showPassword);

    return (
        <div>

            <div className='signup0'>
                <div className='signup1'>

                    <div className='signup3'>
                        <div id='sp3i'>Create account</div>
                        <div><NavLink to='#' id='sp3ii'>Already have an account?</NavLink></div>
                    </div>

                    <div className='signup4'>
                        <div>
                            <TextField type='text' id="outlined-basic" autoFocus={true} required={true} label="First Name" variant="outlined" name='firstName' value={signup.firstName} onChange={(e)=>{onchange(e)}} placeholder="Enter your first name..." />
                        </div>
                        <div>
                            <TextField type='text' id="outlined-basic" required={true} label="Last Name" name='lastName' value={signup.lastName} onChange={(e) => { onchange(e) }} variant="outlined" placeholder='Enter your last name...' />
                        </div>
                    </div>

                    <div className='email1'>
                        <TextField type='email' id="standard-basic" required={true} label="Email" name='email' value={signup.email} onChange={(e) => { onchange(e) }} variant="outlined" placeholder='Enter your email...' fullWidth={true} />
                    </div>

                    <div className='password'>
                        <FormControl sx={{ mt: 2, width: true }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                type={signup.showPassword ? 'text' : 'password'}
                                value={signup.password} name='password'
                                onChange={(e)=>onchange(e)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {/* {signup.showPassword ? <VisibilityOff /> : <Visibility />} */}
                                            {signup.showPassword ? <p>Hide</p> : <p>show</p>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Signup;
