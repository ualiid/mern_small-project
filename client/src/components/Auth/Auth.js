import React, { useState } from 'react'
import { Avatar,Box, Paper, Button, Typography, Container, } from '@material-ui/core';
// import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import Icon from './Icon';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './input';
const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.prevent.default();
    }
    const handleChange = () => {

    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const switchMode = () => {
        setIsSignup((previsSignup) => !previsSignup);
        handleShowPassword(false);
    }
    // const switchMode=()=>{
    //     if(isSignup===true){
    //         isSignup=false;
    //     }else{
    //         isSignup=true;
    //     }
    // }
    // const googleSuccess = async (res) => {
    //     const result = res?.profileObj;
    //     const token = res?.tokenId;
    //     try {
    //         dispatch({ type: 'AUTH', data: { result, token } });
    //         navigate('/')
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // const googleFailure = (err) => {
    //     console.log(err);
    //     console.log('Google Sign In was unsuccessful . Try Again Later ')
    // }
    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={6}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h6">Login with Google accounts</Typography>
                  <Box mt={5}>
                <Button
                    className={classes.googleButton}
                    color='primary'
                    fullWidth
                    onClick={() => loginWithRedirect()}
                    startIcon={<Icon />}
                    variant='contained'>

                    Google Sign In

                </Button>
                  </Box>
                {/* <GoogleLogin
                        clientId='dev-dmnk7jvezbx4r615.us.auth0.com'
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                color='primary'
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant='contained'>

                                Google Sign In

                            </Button>


                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cooKiePolicy='single_host_origin'
                    /> */}





            </Paper>
        </Container>
    )
}

export default Auth