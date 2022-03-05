import React from 'react'
import { ListItem, ListItemIcon, ListItemText, IconButton } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function MenuItem({ item, onIconClickedAddToCat }) {


    return (
        <ListItem>
            <ListItemIcon >
            <IconButton aria-label="addToCard" onClick={ () => onIconClickedAddToCat(item)}>
                 <AddCircleIcon 
                    style={{ fontSize: '60px', cursor:'pointer'}} 
                      size="large" variant="contained" />
            </IconButton>
                
            </ListItemIcon>
            <ListItemText>
            <div>
                <div className="paragraph">
                    <span className="description">
                        {item.product}
                    </span>
                    <span className="price">
                        { item.price + 'kr' } 
                    </span>
                </div>
                <span className="pricedisplay">
                    { item.details }
                </span>
            </div>
            </ListItemText>
                
        </ListItem>
    )
}
