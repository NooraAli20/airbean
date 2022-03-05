import React from 'react'
import {  Button } from '@material-ui/core';
import { useSelector } from 'react-redux'
import DroneImage from '../images/Drone_with_cupsvg.svg'
import { useHistory } from 'react-router-dom'


export default function Status() {


    const orderNumber = useSelector(state => state.orders.order.orderNumber);
    const history = useHistory();

    const handleOnClick = () => {
        history.push('/orderhistory');
    }
    
    return (
        <div style={{ background:'rgb(229,103,78)', padding:'20px', textAlign:'center'}}> 
            <div style={{ color:'rgb(247,209,202)', padding:'60px'}}>
                Ordernummer <b>{ orderNumber}</b>
            </div>
            <div>
            <   img src={DroneImage} alt="Drone with cup" />
            </div>
            <div style={{ color:'#FFF', paddingTop:'40px'}}>
                <div style={{ fontFamily: 'PT serif', fontSize:'40px'}}>
                    <div>
                        Din beställning
                    </div>
                    <div>
                        är på väg!
                    </div>
                </div>
                <div style={{ paddingTop:'15px'}}>
                    <strong>13</strong> minuter
                </div>
            </div>
            <div style={{ padding:'60px'}}>
                <Button color="primary" type="submit" variant="contained" fullWidth style={{ 
                        backgroundColor:'#FFF',
                        color:'rgb(41,36,33)',
                        fontFamily:'PT serif',
                        fontWeight:'bolder',
                        fontSize:'20px',
                        borderRadius:'40px',
                        textTransform:'none',
                        padding:'10px'
                    }}
                    onClick={handleOnClick}>
                        Ok, cool!
                </Button>
            </div>
        </div>
    )
}
