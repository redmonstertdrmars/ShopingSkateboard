import { makeStyles } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import { chosenContext } from '../../contexts/ChosenContext';



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    paper: {
        maxWidth: 1000,
        margin: '40px auto'
    }
});

const Cart = () => {
    const classes = useStyles()
    const { chosen, getChosen } = useContext(chosenContext)

    useEffect(() => {
        getChosen()
    }, [])
    return (
        <TableContainer component={Paper} className={classes.paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Price</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {chosen.products ? (
                        <>
                            {chosen.products.map((elem) => (
                                <TableRow key={elem.item.id}>
                                    <TableCell><img style={{ width: "50px" }} src={elem.item.images} alt={elem.item.title} /></TableCell>
                                    <TableCell align="right">{elem.item.title}</TableCell>
                                    <TableCell align="right">{elem.item.price}</TableCell>
                                    <TableCell align="right">

                                    </TableCell>
                                    <TableCell align="right">{elem.subPrice}</TableCell>
                                </TableRow>
                            ))}
                        </>
                    ) : (<h1>Loading...</h1>)}

                    <TableRow>


                    </TableRow>
                    <TableRow >

                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Cart;