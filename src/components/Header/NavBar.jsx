import React from 'react';
import { AppBar, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    appbar: {
        height: 110,
        backgroundColor: 'black',
    },
    // text: {
    //     height: 25,
    //     width: 1300,
    //     margin: 25,

    // },
    login: {
        width: 115,
        height: 60,
        fontSize: 25,
        backgroundColor: '#FFFFFF',
        color: 'black',
        border: 'none',
        borderRadius: 12,
        boxShadow: '#404242 0px 5px 15px',
    },
    title: {
        fontSize: 64,

        fontFamily: 'Saira Stencil One ',


    },
    about: {
        textDecoration: 'none',
        fontSize: 31,
        color: '#FFFFFF',

    },
    cart: {
        textDecoration: 'none',
        fontSize: 31,
        color: '#FFFFFF',

    }
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appbar}>
            <Grid className={classes.text} container justify="space-between">

                <Link to='/' style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                    <Typography variant="h6" className={classes.title} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                        BoardShop
                    </Typography>

                </Link>

                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>

                    <Link to="/add" style={{ color: '#FFFFFF', textDecoration: 'none', marginTop: "1vw", fontSize: 31 }}>
                        <p style={{ marginRight: "5vw", textAlign: "center" }}>add</p>
                    </Link>
                    <Link to="/chosen" style={{ color: '#FFFFFF', textDecoration: 'none', marginTop: "1vw", fontSize: 31 }}>
                        <p style={{ marginRight: "5vw", textAlign: "center" }}>chosen</p>
                    </Link>

                    <Link to='/cart' className={classes.cart} style={{ color: '#FFFFFF', textDecoration: 'none', marginTop: "1vw" }}>
                        <p style={{ marginRight: "5vw", textAlign: "center" }}>
                            cart
                        </p>
                    </Link>

                    <Link to='/about' style={{
                        textDecoration: 'none'
                    }}>
                        <p style={{ marginRight: "5vw", marginTop: "1vw" }} className={classes.about}>About us </p>

                    </Link>


                    <Link to='/login'>
                        <button style={{ marginRight: "2vw", paddingTop: "-3px" }} className={classes.login} color="inherit">Login</button>
                    </Link>

                </div>


            </Grid>

        </AppBar >
    )
};

export default NavBar;