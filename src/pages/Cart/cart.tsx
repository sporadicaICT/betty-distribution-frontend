import { Container, Box, useTheme, Grid, Typography, SxProps } from "@mui/material"
import React, { useState, useContext, useEffect } from "react"
import { Navbar} from "../../components";
import { Context } from "../../App";


export const CartPage: React.FC = () => {
    const theme = useTheme().palette;``
    const values = useContext(Context);
    const [cartData, setCartData] = values
    // const addCart = () => {
    //     setCartData(cartData.concat({name: 'egusi'}))
    // }
    return (
        <main>
            <Navbar signedIn={true}/>
            <Container>
                <Grid container columnGap={3} rowGap={3} sx={{display: "flex", justifyContent: "center", alignContent: "center", padding: '3rem'}}>
                    {cartData.map((item:any) => {
                        return (
                        <>
                            <Grid item xs={4} md={2} sx={{background: theme.secondary.main}}>
                                <p>Image</p>
                            </Grid>
                            <Grid item xs={7} md={8} sx={{background: theme.secondary.main, textAlign: 'center'}}>
                                <h2>Item</h2>
                                <p>desc</p>
                                <p>money</p>
                            </Grid>
                        </>
                        )
                    })}
                </Grid>
            </Container>
        </main>
    )
}