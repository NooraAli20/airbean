import { Paper, List, Button } from '@material-ui/core'
import MenuItemCart from './MenuItemCart';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Footer from './Footer';
import Header from './Header';
import { useHistory } from "react-router-dom";
import uuid from 'react-uuid';
import {  } from "module";
import { addOrderToDatabase } from "../app/OrderSlice";

export default function Cart() {

    const cartItems = useSelector(state => state.menus.cart);
    const dispatch = useDispatch();

    let totalPrice = 0;
    const history = useHistory();
    
    cartItems.forEach(cart => totalPrice +=  (cart.price * cart.amount));

    const user = useSelector(state => state.user.user);
    const orderDetails = useSelector(state => state.menus.cart);

    const handleClick = () => {

        const orderNumber = '#' + uuid();

        let date = new Date();
        let todayString = date.toLocaleDateString("sv-SE", { // you can use undefined as first argument
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });

        
        dispatch( addOrderToDatabase ({ user, orderNumber, todayString, orderDetails}) );

        history.push('/status')
    }

    return (
        <>
            <div style={{ background: 'rgba(0,0,0,0.5)' }}>
                <Header />
                <div style={{ margin: '10px'}}>
                    <Paper style={{ margin:'15px', padding:'15px', zIndex:1}}>
                        <form noValidate autoComplete="off">
                            <List>
                                {
                                    cartItems.map((item) => (
                                        <MenuItemCart key={item.product} item={item}/>
                                    ))
                                }
                            </List>
                            <div style={{ textAlign: "inherit", paddingTop: '100px', paddingBottom:'40px', fontFamily:'PT serif' }}>
                                <div style={{ fontSize: '20px', fontWeight:'bold'}}>Total {totalPrice} kr</div>
                                <span style={{ fontSize:'11px'}}>inkl moms + drönarleverans</span>
                            </div>
                            <div>
                                <Button color="primary" type="submit" variant="contained" fullWidth style={{ 
                                    backgroundColor:'rgb(41,36,33)',
                                    fontFamily:'PT serif',
                                    fontWeight:'bolder',
                                    fontSize:'20px',
                                    borderRadius:'40px',
                                    textTransform:'none',
                                    padding:'10px'
                                }}
                                onClick={handleClick}>
                                    Take my money!
                                </Button>
                            </div>
                        </form>
                    </Paper>
                </div>
                <Footer/>
            </div>
        </>
    )
}
