import React, { memo, useState, useEffect, useContext, useCallback } from 'react';
import './CSSS/signup.css';
import './CSSS/login.css'
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { webAuth } from './AuthFirbase';
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";




function ForgotPassword() {

    const [signup, setSignup] = useState({
        email: '',
        password: '',
    });

    const [sigl, setSigl] = useState({
        signal: '🔍',
        color: 'inherit',
    });

    console.log(signup.email);

    // ==============

    const forgot = () => {
            sendPasswordResetEmail(webAuth, signup.email)
            .then(() => {
                // Password reset email sent!
                // ..
                toastsh("✅", 'Password reset link sent 🎉', "/login");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toastsh("❌", errorMessage, "/forgotPassword");
            });
    }

    // ===========

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

    // ===============

    // ===========


    // ---------------------------------------

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
        setSignup(signup => ({ ...signup, [e.target.name]: e.target.value }));
    }

    useEffect(() => {
        let passLength = signup.password.length;

        if (passLength === 0) {
            setSigl({
                signal: '🔍',
                color: 'inherit',
            })
        }

        if (passLength > 0 && passLength < 5) {
            setSigl({
                signal: 'Weak🛠️',
                color: 'secondary',
            })
        }

        if (passLength >= 5 && passLength < 8) {
            setSigl({
                signal: 'Moderate👀',
                color: 'secondary',
            })
        }

        if (passLength >= 8) {
            setSigl({
                signal: 'Strong🔐',
                color: 'success',
            })
        }
    }, [signup]);


    function LinearProgressWithLabel(props) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', width: 270 }}>
                <Box sx={{ width: '100%', mr: 1, }}>
                    <LinearProgress variant="indeterminate" sx={{ height: 8, borderRadius: 10, }} color={sigl.color} />
                </Box>
                <Box sx={{ minWidth: 170, fontSize: 15 }}>
                    <Typography variant="body5" color="text.secondary">{props.value}</Typography>
                </Box>
            </Box>
        );
    }


    // console.log(signup);

    return (
        <div  style={{marginTop:"100px"}}>

            <div className='signup0'>
                <div className='signup1'>

                    <div className='signup3'>
                        <div id='sp3i'>Forgot Password</div>
                        <div><NavLink to='/login' id='sp3ii'>Back to login</NavLink></div>
                    </div>


                    <div className='email1 loginEmail'>
                        <TextField type='email' id="standard-basic" required={true} label="Email" name='email' value={signup.email} onChange={(e) => { onchange(e) }} variant="outlined" placeholder='Enter your email...' fullWidth={true} />
                    </div>

                    <div className='divider1'>
                        <Divider sx={{ color: 'black', fontSize: 12 }} >Do not forgot to check SPAM box.
                        </Divider>
                    </div>

                    <div className='createAccount'>
                        <button class="custom-btn btn-12" onClick={ ()=>forgot()}><span ><NavLink to='#' id='createAccounti'>Click!</NavLink></span><span id='createAccounti'>Send Passowrd Reset Email</span></button>
                    </div>

                    
                    <div>
                        <div id="toast" className={tst ? "oops" : "show"}><div id="img">{toastData.icon}</div><div id="desc">{toastData.message}</div></div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default memo(ForgotPassword);
