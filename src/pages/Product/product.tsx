import { Container, useTheme, Grid, Typography, SxProps, Button, Select, MenuItem, Box } from "@mui/material"
import { ArrowDropDown } from "@mui/icons-material";
import React, { useState, useContext, useEffect } from "react"
import { Navbar} from "../../components";
import { Context } from "../../App";
import { buttonStyles, whiteButtonText, blackButtonText } from "../../utils/styles.utils";
import styles from "../Product/product.module.scss";
import { OneProduct } from "../../mock/product";
import arrowDown from "../../assets/arrow-down.svg"


export const ProductPage: React.FC = () => {

    const themeColors = useTheme().palette;

    let [quantity, setQuantity] = useState(1);

    const containerStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3rem',
        gap: '2rem'
    }
    const boxStyles = {
        height: '25rem',
        background: themeColors.secondary.main
    }
    const addButton = {
        ...buttonStyles,
        ...blackButtonText
    }
    const buyButton = {
        ...buttonStyles,
        ...whiteButtonText
    }
    let numbers = [];
    for (let i = 1; i<=100; i++) {
        numbers.push(i);
    }
    const increase = () => {
        setQuantity(quantity++)
    }
    const decrease = () => {
        setQuantity(quantity--)
    }

    return (
        <>
            <Navbar signedIn={true}/>
            <h2 className ={styles.header}>Product Information</h2>
            <Container sx={containerStyles}>
                <Box sx={{...boxStyles, width: '40%', display: {xs: 'none', md: 'flex'}, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <img className={styles.product} src={OneProduct.image_url} alt="" />
                    
                     <div className={styles.options}>
                        <Button sx={{...addButton, width: '40%', background: themeColors.secondary.main}}>Add to Cart</Button>
                        <Button variant="contained" sx={{...buyButton, width: "40%"}}>Buy Now</Button>
                     </div>
                </Box>
                <Box sx={{...boxStyles, width: {xs: '85%', md: '45%'}, display: 'flex', flexDirection: 'column'}}>
                    <div className={styles.desc}>
                        <div className={styles.intro}>
                            <img className={styles.rimg} src={OneProduct.image_url} alt="" />
                            <h2>{OneProduct.name}</h2>
                        </div>
                        <h3>Description:</h3>
                        <p>{OneProduct.description}</p>
                    </div>
                    <div className={styles.desc} style={{marginTop: 'auto', display: 'flex'}}>
                        <h2>Price: N {OneProduct.unit_price}</h2>
                        <div className={styles.quantity} style={{marginLeft: 'auto'}}>
                            <h2>Qty: <input type="number" value={quantity} onChange = {(e) => {
                                setQuantity(parseInt(e.target.value))
                            }}/></h2>
                            <div className={styles.counter}>
                                <Button onClick={decrease}>-</Button>
                                <Button onClick={increase}>+</Button>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.roptions}>
                        <Button sx={{...addButton, width: '40%', background: themeColors.secondary.main}}>Add to Cart</Button>
                        <Button variant="contained" sx={{...buyButton, width: "40%"}}>Buy Now</Button>
                     </div>
                </Box>
            </Container>
        </>
    )
}