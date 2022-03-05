import React from 'react'
import { ListItemText, TextField } from "@material-ui/core";
import { useDispatch } from 'react-redux'
import { updateItemAmount } from "../app/MenuSlice";
import './css/menus.css'

export default function MenuItemCart({ item }) {

    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        const {value } = e.target;
        dispatch(updateItemAmount({...item, amount : value}));
    }

    return (
        <ListItemText >
            <div>
                <div className="paragraph">
                    <span className="description">
                        {item.product}
                        
                    </span>
                    <span className="price">
                        <TextField 
                            type="number" 
                            value={item.amount}
                            size='medium' 
                            style={{ 
                                width:'40px', 
                                fontWeight:'bold', 
                                textAlign:'right'
                            }} 
                            onChange={handleOnChange}
                        />
                    </span>
                </div>
                <span className="pricedisplay">
                    { (item.price * item.amount) + 'kr' } 
                </span>
            </div>
        </ListItemText>
    )
}
