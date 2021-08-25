import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { productContext } from '../../contexts/ProductContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite'
import { chosenContext } from '../../contexts/ChosenContext'




const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        // opacity: '80%'
        border: '3px black solid',
        borderRadius: 15
    },

    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ProductCard({ item, history }) {
    const classes = useStyles();
    const { deleteProduct, addProductInCart, checkProductInCart } = useContext(productContext)
    const { addProductInChosen, checkProductInChosen } = useContext(chosenContext)



    let icons = (
        <CardActions disableSpacing>
            <Link to={`/edit/${item.id}`} style={{ color: 'black', textDecoration: 'none' }}>
                <IconButton aria-label="add to favorites">
                    <EditIcon />
                </IconButton>
            </Link>
            <IconButton aria-label="share" onClick={() => deleteProduct(item.id, history)}>
                <DeleteIcon />
            </IconButton>

            <IconButton
                aria-label="share"
                onClick={() => addProductInCart(item)}
                color={checkProductInCart(item.id) ? "secondary" : "inherit"}
            >
                <ShoppingCartIcon />
            </IconButton>
            <IconButton
                // color={checkItemInCart(item.id)}
                aria-label="add to shopping"
                color='warning'
                onClick={() => history.push(`/comments/${item.id}`)}
            // onClick={() => addProductToCart(item)}
            >
                <CommentIcon />

            </IconButton>
            <IconButton
                aria-label="share"
                onClick={() => addProductInChosen(item)}
                color={checkProductInChosen(item.id) ? "secondary" : "inherit"}
            >
                <FavoriteIcon />
            </IconButton>
        </CardActions>
    )

    return (


        <Card className={classes.root}>
            <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <CardHeader
                    title={item.title}
                    subheader={item.type}
                />
                <CardMedia
                    className={classes.media}
                    image={item.image}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.description}
                    </Typography>
                </CardContent>
            </Link>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.price}
                </Typography>
            </CardContent>
            {icons}


        </Card>

    );
}
