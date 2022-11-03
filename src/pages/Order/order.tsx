import { Container, useTheme, Grid, Typography, SxProps, Button, Select, Paper, Box } from "@mui/material"
import { Delete, IndeterminateCheckBox, ArrowDropDown, FullscreenExit } from "@mui/icons-material";
import React, { useState, useContext, useEffect } from "react"
import { Navbar} from "../../components";
import { Context } from "../../App";
import { buttonStyles, whiteButtonText } from "../../utils/styles.utils";
import styles from "../Order/order.module.scss";
import { EmptyCart } from "../../components";


export const OrderPage: React.FC = () => {

    const themeColors = useTheme().palette

    const boxStyle = {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '100px',
        bottom: 0,
        width: '100vw'
    }

    return (
        <>
        <Navbar signedIn={true}></Navbar>
        {/* <Container> */}
            <Box sx={boxStyle}> 
                <section style={{padding: '1rem'}} className={styles.main}>
                        <div>
                            <Typography variant="h5">
                                Delivery
                            </Typography>
                            <p>Delivery date: June 24 2022</p>
                        </div>
                        <div className={styles.order} style={{borderTop: '1px solid grey', paddingTop: '0.5rem'}}>
                            <Typography variant="h6">
                                Subtotal
                            </Typography>
                            <Typography variant="h6">
                                price
                            </Typography>
                        </div>
                        <div className={styles.order}>
                            <p>Discount</p>
                            <p>price</p>
                        </div>
                        <div className={styles.order} style={{borderTop: '1px solid grey', paddingTop: '0.5rem'}}>
                            <Typography variant="h6">
                                Total
                            </Typography>
                            <Typography variant="h6">
                                price
                            </Typography>
                        </div>
                        <div className={styles.roptions}>
                            <Button variant="contained" sx={{width: '100%'}}>Proceed to checkout</Button>
                            <Button  sx={{width: "100%", marginTop: '1.2rem'}}>Continue shopping</Button>
                        </div>
                </section>
            </Box>
        {/* </Container> */}
        </>
    )
}