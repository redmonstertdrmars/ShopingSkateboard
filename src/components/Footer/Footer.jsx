import { Link } from 'react-router-dom'
import React from 'react';
import "../Footer/Footer.css"



const Footer = () => {


    return (
        <footer className="footer">
            <div className="container" style={{ width: 75, height: 75 }}>

            </div>
            <div className="number">
                <Link to="/privacy">
                    <spun>
                        Политика конфиденциальности и Условия использование
                    </spun>
                </Link>
                <spun>
                    Ⓒ «Board Shop» | Скейтбординг, 2019-2021
                </spun>

                <spun>
                    MegaCom (+996550139519)
                    <br />
                    O!(+996709139519)
                </spun>


            </div>



        </footer >
    );
};

export default Footer;