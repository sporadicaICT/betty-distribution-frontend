import { Container, useTheme, Grid, Typography, SxProps, Button, Select, MenuItem } from "@mui/material"
import React, { useState, useContext, useEffect } from "react"
import styles from "../EmptyCart/empty-cart.module.scss";
import Image from "../../assets/empty-cart.svg"

export const EmptyCart: React.FC = () => {
    return (
        <>
            <div className={styles.main}>
                <Typography variant="h5"sx={{height: '20%', marginLeft: '2rem'}}>
                    Cart
                </Typography>
                <div className={styles.image}>
                    <img src={Image} alt="" />
                    <p>Your Shopping Cart is empty</p>
                </div>
            </div>
        </>
    )
}