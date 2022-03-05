import React, {  useState } from 'react'
import { CssBaseline, Toolbar, ListItem, ListItemText, AppBar, Grid, Drawer, Typography, makeStyles, Badge, List} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux'
import headerImage from '../images/graphics-header.svg'
import { useLocation, useHistory } from 'react-router-dom'
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from "react-router-dom";

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
    toolbarButtons : {
        marginLeft: 'auto'
    },
    root : {
        display: 'flex',
        margin: theme.spacing(1),
        '& .MuiDialogActions-root' : {
            alignContent: 'center',
            textAlign:'center'
        }
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        background:'rgb(47,41,38)',
        color:'#FFF'
    },
    drawerContainer: {
        overflow: 'auto',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}))

export default function Header() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    let history = useHistory();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleCart = () => {

    }

    const handleOpenCart = () => {
        /*setOpen(true);*/
        history.push('/cart')
    };

    const { pathname } = useLocation();
    const showCartPages = useSelector(state => state.menus.showCartPages);
    const showCartOnPage = showCartPages.includes(pathname);

    const cartItems = useSelector(state => state.menus.cart);

    let totalPrice = 0;
    cartItems.forEach(cart => totalPrice +=  (cart.price * cart.amount));

    const numberOfItemsInCard = cartItems.length;

    return (
        <Grid item style={{ backgroundImage: `url(${headerImage})`, height:'110px' }}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="relative" color="transparent" elevation={0} className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="default"
                            aria-label="open drawer"
                            onClick={ handleDrawerOpen } 
                            edge="start"
                            style={{ borderRadius: '25px', backgroundColor: 'rgb(255,255,255)'}}
                        >
                            <MenuSharpIcon />
                        </IconButton>
                        <Typography variant="h6">
                            
                        </Typography>
                        {showCartOnPage === true && 
                            (
                                <div className={classes.toolbarButtons}>
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleCart}
                                        color="default"
                                        style={{ borderRadius: '25px', backgroundColor: 'rgb(47,41,38)'}}
                                        
                                    >
                                        <Badge badgeContent={numberOfItemsInCard} color="secondary" showZero>
                                            <ShoppingCartIcon onClick={ handleOpenCart } style={{ fontSize:'30px', color:'#FFF'}}/>
                                        </Badge>
                                        
                                    </IconButton>
                                </div>
                            )
                        }
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    open={open}
                    classes={{paper: classes.drawerPaper}}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            <CancelIcon style={{ backgroundColor:'#FFF'}}/>
                        </IconButton>
                    </div>
                    <div className={classes.drawerContainer}>
                        <List>
                            {
                                [
                                    { "id" : "Meny", "linkTo" : "/menu"},
                                    { "id" : "Vårt kaffe", "linkTo" : "/about"},
                                    { "id" : "Min profil", "linkTo" : "/profile"},
                                    { "id" : "Orderstatus", "linkTo" : "/orderhistory"},

                                ].map(menuItem => (
                                <ListItem button key={menuItem.id}>
                                    <ListItemText primary={<Link to={menuItem.linkTo}>{menuItem.id}</Link>} />
                                </ListItem>
                                ))
                            }
                        </List>
                    </div>
                </Drawer>
            </div>
        </Grid>
    )
}
