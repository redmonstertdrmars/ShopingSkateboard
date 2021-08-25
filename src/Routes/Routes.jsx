import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from '../components/AboutUs/AboutUs';
import Add from '../components/Admin/Add';
import Edit from '../components/Admin/Edit';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Cart from '../components/Cart/Cart';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/Header/NavBar';
import Home from '../components/Home/Home';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';
import ProductComments from '../components/Product/ProductComments';
import ProductDetail from '../components/Product/ProductDetail';
import Chosen from '../components/Сhosen/Chosen';
import AuthContextProvider from '../contexts/AuthContext';
import ChosenContextProvider from '../contexts/ChosenContext';
import ProductContextProvider from '../contexts/ProductContext';

const Routes = () => {
    return (
        <ChosenContextProvider>
            <AuthContextProvider>
                <ProductContextProvider>
                    <BrowserRouter>
                        <NavBar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/about" component={AboutUs} />
                            <Route exact path="/add" component={Add} />
                            <Route exact path="/edit/:id" component={Edit} />
                            <Route exact path="/detail/:id" component={ProductDetail} />
                            <Route exact path="/cart" component={Cart} />
                            <Route exact path="/privacy" component={PrivacyPolicy} />
                            <Route exact path='/comments/:id' component={ProductComments} />
                            <Route exact path="/chosen" component={Chosen} />
                        </Switch>
                        <Footer />
                    </BrowserRouter>
                </ProductContextProvider>
            </AuthContextProvider>
        </ChosenContextProvider>
    );
};

export default Routes;