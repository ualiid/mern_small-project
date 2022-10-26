import React, { useState, useEffect} from 'react'
import { Typography, AppBar, Button, Toolbar, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import {useAuth0} from '@auth0/auth0-react'
// import { useNavigate, useLocation } from 'react-router-dom';
import memories from '../../images/memories.png';
import useStyles from './styles';



const Navbar = () => {
    const classes = useStyles();
    // const dispatch = useDispatch();
    // const navigate=useNavigate();
    // const location= useLocation();
    const {logout,isAuthenticated,user}=useAuth0()
   // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // const logout = () => {
    //       dispatch({type:'LOGOUT'});
    //       navigate('/');
    //       setUser(null);
    // };
 
    // useEffect(() => {
    //     const token = user?.token;
    //     setUser(JSON.parse(localStorage.getItem('profile')));
    // },[location])
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>Memories </Typography>
                <img src={memories} className={classes.image} alt='memories' height='60' />
            </div>
            <Toolbar className={classes.toolbar}>
                {isAuthenticated ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.name} src={user.picture}>
                            {user?.picture}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">
                            {user?.name}
                        </Typography>
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='primary'>
                        Sign In
                    </Button>
                )}

            </Toolbar>
        </AppBar>
    )
}

export default Navbar