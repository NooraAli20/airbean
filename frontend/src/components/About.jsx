import React from 'react'
import EveCortado from '../images/Eva.svg'
import Header from './Header';
import Footer from './Footer';


export default function About() {

    return (
        <div style={{ background: 'rgb(243,228,224)'}}>
            <Header />
            <div style={{ padding: '30px', color: 'rgb(47,41,38)'}}>
                <div style={{ 
                    fontSize:'40px',
                    textAlign:'center',
                    fontFamily:'PT Serif'
                }}
                >
                    Vårt kaffe
                </div>
                <div style={{ fontSize:'12px', wordWrap: 'break-word', fontFamily:'Work Sans'}}>
                    <div style={{ fontWeight:'bolder', padding: '10px'}}>
                        Pumpkin spice mug, barista cup, sit ma
                        macchiato, kopi-luwak, doppio, ground
                        dripper, crema, strong whipped, variety
                        extra iced id lungo half and half mazagran.
                        Pumpkin spice.
                        
                    </div>
                    <div style={{ padding: '10px'}}>
                        Que dark fair trade, spoon decaffeinated, barista 
                        wings whipped, as rich aftertaste, con panna milk 
                        black, arabica white rich beans single shot extra 
                        affogato. So affogato macchiato sit extraction 
                        instant grinder seasonal organic, turkish single shot,
                        single origin, and robusta strong to go so dripper. 
                        Viennese froth, grounds caramelization skinny 
                        aromatic cup kopi-luwak, fair trade flavour, 
                        frappuccino medium, café au lait flavour cultivar ut 
                        bar instant kopi-luwak.
                    </div>
                    <div style={{ padding : '10px'}}>
                         Roast id macchiato, single shot siphon mazagran 
                         milk fair trade est aroma a half and half and, so, 
                         galão iced to go, whipped as cream cup pumpkin 
                         spice iced. At extra, rich grinder, brewed to go, 
                         steamed half and half at, that, percolator macchiato 
                         trifecta and body as arabica dripper. In galão black 
                         java milk sit trifecta, robusta, acerbic café au lait 
                         instant shop latte. Seasonal bar shop filter aroma id, 
                         crema, affogato viennese cultivar aftertaste, 
                         seasonal, percolator cream black, galão flavour, milk 
                         aromatic turkish skinny crema.
                    </div>
                    <div style={{ padding : '40px', textAlign:'center'}}>
                        <div><img src={EveCortado} alt="Eva Cortado" /></div>
                        <div style={{ 
                                fontWeight:'bolder', 
                                fontSize:'30px',
                                fontFamily:'PT Serif'
                            }}>
                                Eva Cortado
                        </div>
                        <div style={{ fontSize: '12px'}}>VD & Grundare</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

       
     
    )
}
