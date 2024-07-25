import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

import {login, logout} from '../../redux/user/slice';

import { selectProductsCount } from '../../redux/cart/cart.selectors';

function Header() {
    const [cartIsVisible, setCartIsVisible] = useState(false);

    const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

    const productsCounter = useSelector(selectProductsCount);

    const dispatch = useDispatch();


    const handleCartClick = () => {
        setCartIsVisible(true);
    };

    const handleLoginClick = ()=> {
        dispatch(login({name: "Lucas", email:"lucas@email.com"}));
    };

    const handleLogoutClick = ()  => {
        dispatch(logout());
    }

    return (
        <Styles.Container>
            <Styles.Logo>Redux Shopping</Styles.Logo>
            <Styles.Buttons>
                {currentUser ? (
                    <div onClick={handleLogoutClick}>Sair</div>
                ): (
                    <div onClick={handleLoginClick}>Login</div>
                )}
                <div onClick={handleCartClick}>Carrinho ({productsCounter})</div>
            </Styles.Buttons>

            <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
        </Styles.Container>
    );
}

export default Header;
