import { alpha, makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ProductList from '../Product/ProductList';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { productContext } from '../../contexts/ProductContext';



const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: 600
    },
    img1: {
        width: '100%',
        height: 600
    },
    img2: {
        width: '100%',
        height: 600
    },
    img3: {
        width: '100%',
        height: 600
    },
    img4: {
        width: '100%',
        height: 600
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#FFFFFF',
        '&:hover': {
            opacity: '60%', transition: '0.3s',
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },

}))
export default function Home() {
    const classes = useStyles();
    const { getProducts } = useContext(productContext)
    const history = useHistory()

    // const getSearchVal = (history) => {
    //     const search = new URLSearchParams(history.location.search)
    //     return search.get('q')
    // }
    // const [searchVal, setSearchVal] = useState(getSearchVal() || '')

    const handleValue = (e) => {
        const search = new URLSearchParams(history.location.search)
        search.set('q', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        // setSearchVal(e.target.value)
        getProducts(history)
    }



    return (
        <>
            <Carousel className={classes.container}>
                <Carousel.Item interval={1000} className={classes.img1}>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/1668047.jpg"

                    />
                </Carousel.Item>
                <Carousel.Item interval={1000} className={classes.img2}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/70/51/8d/70518dc8d2162fbbaac77efd0303c479.jpg"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000} className={classes.img3}>
                    <img
                        className="d-block w-100"
                        src="https://c1.wallpaperflare.com/preview/987/490/550/skateboard-skateboarder-grind-skateboarding.jpg"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000} className={classes.img4}>
                    <img
                        className="d-block w-100"
                        src="https://www.pixel4k.com/wp-content/uploads/2018/10/skateboarder-skateboard-trick-street-4k_1540062507.jpg"

                    />
                </Carousel.Item>
            </Carousel>

            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}

                    onChange={(e) => handleValue(e)}
                />
            </div>
            <ProductList />
        </>



    );
};

