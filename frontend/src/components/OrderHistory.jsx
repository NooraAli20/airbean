import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchByUser } from "../app/OrderSlice";
import Header from './Header';
import ProfileImage from '../images/Profile.svg'

export default function OrderHistory() {
    
    const orderHistory = useSelector(state => state.orders.ordersByUser);
    const {username, email } = useSelector(state => state.user.user);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchByUser(username));

    }, [dispatch])

    let totalSum = 0;
    orderHistory.forEach(item => {
        totalSum += item.orderDetails.reduce((total, element) => {
            return total += (parseInt(element.amount) * parseInt(element.price))
        }, 0) 
    });

    return (
        <>
            <Header />
            <div style={{ 
                    backgroundColor:'rgb(41,36,33)', 
                    color:'#FFF', 
                    textAlign:'center', 
                    fontFamily:'PT serif',
                    padding:'5px'}}>
                <div>
                   <img src={ProfileImage} alt="profile"/>
                </div>
                <div>
                     <div style={{ color:'#FFF', fontSize:'40px'}}>{username}</div>
                     <div style={{ color:'rgb(213,212,212)', fontFamily:'Work Sans'}}>{email}</div>
                </div>
                <div style={{ padding:'30px'}}>
                    <div style={{ 
                        fontSize:'30px', 
                        fontWeight:'20px', 
                        textAlign:'left', 
                        paddingLeft:'10px', 
                        paddingTop:'60px', margin:'15px'}}>Orderhistorik</div>
                    {
                        orderHistory.map(item => (

                            <div key={item.id + '_1'} style={{ 
                                    paddingBottom: '10px',
                                    margin:'20px',
                                    fontFamily:'Work Sans',
                                    borderBottom:'solid 1px rgb(64,58,55)'
                                }} 
                            >
                                <div style={{ color: 'rgb(192,192,190)'}}>
                                    <div className="left-div">
                                        <strong style={{ textTransform:'uppercase'}}>
                                            {item.orderNumber.substring(0,15)}
                                        </strong>
                                    </div>
                                    <div className="right-div">{item.todayString}</div>
                                </div>
                                <div style={{ color: 'rgb(151,148,147)'}}>
                                    <div className="left-div">total ordersumma</div>
                                    <div className="right-div">
                                    {
                                        item.orderDetails.reduce((total, element) => {
                                            return total += (parseInt(element.amount) * parseInt(element.price))
                                        }, 0) + ' kr'
                                    }</div>
                                </div>
                            </div>
                        ))
                    }
                    <div style={{ 
                            borderTop:'solid 1px rgb(255,255,255)', 
                            margin:'20px',
                            paddingTop:'10px', 
                            paddingBottom:'40px',
                            color: 'rgb(213,212,212)',
                            fontFamily: 'Work Sans',
                            fontSize:'20px',
                            fontWeight:'bold'
                        }}
                    >
                        <div className="left-div">Totalt spenderat</div>
                        <div className="right-div">{totalSum} kr</div>
                    </div>
                </div>

            </div>
        </>
    )
}
