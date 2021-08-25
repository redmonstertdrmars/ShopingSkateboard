import { makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    lorem: {
        display: 'flex',
        justifyContent: 'center',
        flex: 'wrap',
        color: 'black'
    },
    cont: {
        flex: 'wrap',
        justifyContent: 'center',
        marginLeft: 433
    }
}));

const AboutUs = () => {
    const classes = useStyles();
    return (
        <div className={classes.cont}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KZRG539G7as" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2 className={classes.lorem} style={{ width: 500, }}>
                Все началось с обычного сообщества друзей скейтеров в соц. сети, созданного для обсуждения мест и встреч совместного катания. Затем мы начали снимать лайв стайл видео с названием «SkateBoard», и это стало мотивировать новичков кататься на скейтборде. После мы задумались над созданием собственного скейтборд бренда под названием "BoardShop".
            </h2>
            <img src="https://zavtrakatat.com/wp-content/uploads/2021/07/DSC04195.jpg" alt="" className={classes.image} style={{ maxWidth: 499, maxHeight: 313 }} />
            <h2 style={{ width: 500, color: 'black' }}    >
                Мы используем лучшие материалы которые доступны на фабриках и делаем максимально низкие цены за счёт обьема заказа, также мы стремимся сделать скейтбординг более доступным поэтому не завышаем цену на бренд.
            </h2>
        </div >

    );
};

export default AboutUs;