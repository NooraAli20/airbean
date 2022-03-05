import React, { useEffect} from 'react'
import Header from './Header'
import { fetchAllMenus } from "../app/MenuSlice";
import { useDispatch, useSelector } from 'react-redux'
import { HTTP_STATUS } from '../app/constants'
import { List, SnackbarContent, Typography } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from './MenuItem';
import { addToCart, updateItemInCart } from "../app/MenuSlice";
import Footer from './Footer';


export default function Menu() {
    
    const dispatch = useDispatch();
    const loading = useSelector(state => state.menus.loading);
    const menus = useSelector(state => state.menus.data);
    const cartItems = useSelector(state => state.menus.cart);
    
    useEffect(() => {
        dispatch(fetchAllMenus())
    }, [dispatch])

    const onIconClickedAddToCat = (item) => {

        // check if the item exists already in the cart
        const itemExists = cartItems.filter(x => x.id === item.id);

        // if yes, then we need to do an update 
        if(itemExists.length === 1)
        {
            const cartAmount = itemExists[0].amount;
            dispatch(updateItemInCart({ ...item, amount : cartAmount + 1 }))
        }
        else
            dispatch(addToCart({...item, amount : 1}))
    }

    return (
        
        <div style={{ backgroundColor: 'rgb(243,228,224)'}}>
            <Header />
            <Typography component="div" variant="h2" style={{ 
                textAlign: "center", 
                display:"block",
                fontFamily:"PT serif"}}>
                Meny
            </Typography>
            {loading === HTTP_STATUS.PENDING && (
                <CircularProgress />
            )}


            {loading === HTTP_STATUS.REJECTED && (
                <SnackbarContent
                    message={
                    'There was a problem loading the menus data. '
                }
              />
            )}

            {loading === HTTP_STATUS.FULFILLED && (
                
                <List>
                    {
                        menus.map(menu => (
                            <MenuItem key={menu.id} item={menu} onIconClickedAddToCat={onIconClickedAddToCat} />
                        ))
                    }
                </List>
            )}
            <Footer />
        </div>
    )
}
