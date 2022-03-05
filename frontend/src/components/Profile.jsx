import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { AddNewUserToDB } from "../app/ProfileSlice";
import Header from './Header'
import { useHistory } from "react-router-dom";
import centerImage from '../images/A.svg'

import {
    Paper,
    CssBaseline,
    TextField,
    Grid,
    Button,
    Radio,
    FormControlLabel
  } from '@material-ui/core';

export default function Profile() {

    const [username, setUsername ] = useState('');
    const [email, setEmail] = useState('');
    const [isGDPR, setIsGDPR] = useState(false);

    const dispatch = useDispatch();
    let history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            AddNewUserToDB({username, email, isGDPR})
        ).then(unwrapResult)
        .then(
            history.push({pathname: '/menu'})
        ).catch( (err) => console.log(err));
    }

    return (
        <div style={{ backgroundColor:'rgb(41,36,33)', paddingBottom:'15px'}}>
            <Header />
            <CssBaseline />
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <Paper style={{ 
                        marginLeft:'20px',
                        marginRight:'20px',
                        marginBottom:'20px',
                        padding: '30px', 
                        backgroundColor: 'rgb(243,228,224)' 
                    }}
                    >
                    <div style={{ textAlign:'center', fontSize:'20px'}}><img src={centerImage} alt="React Logo"/></div>
                    <div style={{ 
                        whiteSpace: 'pre-line', 
                        color: 'rgb(41,41,38)',
                        fontSize:'40px',
                        fontWeight:'bolder',
                        justifyContent:'center',
                        textAlign:'center',
                        fontFamily:'PT serif'
                    }}>
                            <div>
                                Välkommen till
                            </div>
                            <div>
                                AirBean-familjen!
                            </div>

                    </div>
                    <div style={{ 
                        textAlign: 'center', 
                        fontSize:'20px', 
                        fontFamily:'Work Sans', 
                        fontWeight:'50px', 
                        marginTop:'10px', marginBottom: '60px'}}>
                        <div>
                            Genom att skapa ett konto nedan kan 
                        </div>
                        <div>
                            du spara och se din orderhistorik.
                        </div>
                    </div>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField 
                                        fullWidth 
                                        label="Namn" 
                                        name="username" 
                                        size="small" 
                                        value={username}
                                        variant="outlined" 
                                        onChange={e => setUsername(e.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Epost"
                                        name="email"
                                        size="small"
                                        variant="outlined"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={
                                        <Radio 
                                            name="isGDPR" 
                                            checked={true}
                                            onChange={e => setIsGDPR(e.target.checked)} value={isGDPR} />} label="GDPR ok!" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} alignContent="center" justify="center">
                            <Button color="primary" type="submit" variant="contained" fullWidth style={{ 
                                backgroundColor:'rgb(41,36,33)',
                                fontFamily:'PT serif',
                                fontWeight:'bolder',
                                fontSize:'30px',
                                borderRadius:'40px',
                                textTransform:'none',
                                padding:'10px'
                            }}>
                                Brew me a cup!
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
          </form>
        </div>
    )
}
