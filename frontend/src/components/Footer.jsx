import React from 'react'
import { Grid } from "@material-ui/core";
import footerImage from '../images/graphics-footer.svg'

export default function Footer() {
    return (
        <Grid item style={{ 
            backgroundImage: `url(${footerImage})`, 
            paddingTop:'30px',
            height:'70px' }}>
        </Grid>
    )
}
