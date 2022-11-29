import React, { memo, useState, useEffect, useContext } from 'react';
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




function Login() {

    const [signup, setSignup] = useState({
        email: '',
        password: '',
    });

    const [sigl, setSigl] = useState({
        signal: '🔍',
        color: 'inherit',
    });



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
        <div>

            <div className='signup0'>
                <div className='signup1'>

                    <div className='signup3'>
                        <div id='sp3i'>Login</div>
                        <div><NavLink to='/signup' id='sp3ii'>Don't have an account?</NavLink></div>
                    </div>


                    <div className='email1 loginEmail'>
                        <TextField type='email' id="standard-basic" required={true} label="Email" name='email' value={signup.email} onChange={(e) => { onchange(e) }} variant="outlined" placeholder='Enter your email...' fullWidth={true} />
                    </div>

                    <div className='password'>
                        <FormControl sx={{ mt: 3, width: true }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                type={signup.showPassword ? 'text' : 'password'}
                                value={signup.password} name='password'
                                onChange={(e) => onchange(e)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {signup.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>

                    <div className='rememberMe'>
                        <div>
                            <FormControlLabel control={<Checkbox />} label="Keep me sign in" />
                        </div>

                        <div>
                            <p><NavLink to='#' id='forgotPass'>Forgot Password?</NavLink></p>
                        </div>
                        
                    </div>

                    <div className='passwordSignal'>
                        <Box sx={{ width: '30%' }}>
                            <LinearProgressWithLabel color='success' value={sigl.signal} />
                        </Box>
                    </div>


                    <div className='createAccount'>
                        <button class="custom-btn btn-12"><span ><NavLink to='#' id='createAccounti'>Click!</NavLink></span><span id='createAccounti'>Login</span></button>
                    </div>

                    <div className='divider1'>
                        <Divider sx={{ color: 'black', fontSize: 12 }} >Login with</Divider>
                    </div>


                    <div className='logbtns'>

                        <Stack direction="row" spacing={2} >
                            <NavLink to='#' id='acct1'>
                                <Button variant="outlined" sx={{ width: '120px' }}>
                                    <img src="https://www.clipartmax.com/png/middle/105-1055517_google-chrome-icon-google-logo-round-png.png" alt='img' width='32' />Google
                                </Button>
                            </NavLink>

                            <NavLink to='#' id='acct1'>
                                <Button variant="outlined" sx={{ width: '120px' }}>
                                    <img src="https://image.similarpng.com/very-thumbnail/2021/05/Facebook-logo-design-on-transparent-background-PNG.png" alt='img' width='30' />Facebook
                                </Button>
                            </NavLink>

                            <NavLink to='#' id='acct1'>
                                <Button variant="outlined" sx={{ width: '120px' }}>
                                    <img src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png" alt='img' width='30' />Twitter
                                </Button>
                            </NavLink>
                        </Stack>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default memo(Login);
