import React from 'react'
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core'
import leftImage from '../images/intro-graphic-left.svg'
import centerImage from '../images/airbean-landing.svg'
import rightImage from '../images/intro-graphic-right.svg'


export default function Landing() {

    let history = useHistory();

    const imageClick = () => {
        history.push('/menu')
    } 

    return (
        
        <>
            <Grid item container direction="row" style={{ backgroundColor : 'rgb(56,132,109)', textAlign:'center'}}>
                <Grid item xs> 
                    <div><img src={leftImage} alt="React Logo" /></div>
                </Grid>
                <Grid item xs={5}> 
                    <div style={{ paddingTop: '150px', cursor: 'pointer'}}>
                        <img src={centerImage} alt="React Logo" onClick={ imageClick } />
                    </div>
                </Grid>
        
                <Grid item xs>
                    <div style={{ alignContent :'flex-end', textAlign:'right'}}><img src={rightImage} alt="React Logo" /></div>
                </Grid>
            </Grid>
        </>
    )
}
