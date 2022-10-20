import { Container, useTheme, Grid, Typography, SxProps, Button, Select, MenuItem } from "@mui/material"
import { Delete, IndeterminateCheckBox } from "@mui/icons-material";
import React, { useState, useContext, useEffect } from "react"
import { Navbar} from "../../components";
import { Context } from "../../App";
import { buttonStyles, whiteButtonText } from "../../utils/styles.utils";
import styles from "../Cart/cart.module.scss";


export const CartPage: React.FC = () => {

    let [quantity, setQuantity] = useState(1);

    const btnStyle = {
        ...buttonStyles,
        ...whiteButtonText

    }
    const increase = () => {
        setQuantity(quantity++)
    }
    const decrease = () => {
        setQuantity(quantity--)
    }

    const theme = useTheme().palette;
    const values = useContext(Context);
    const [cartData, setCartData] = values
    // const addCart = () => {
    //     setCartData(cartData.concat({name: 'egusi'}))
    // }
    return (
        <main>
            <Navbar signedIn={true}/>
            <Container sx={{ padding: '3rem'}}>
                <Grid container columnGap={2} rowGap={4} sx={{display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                    {cartData.map((item:any) => {
                        return (
                        <>
                            <Grid item xs={4} md={2}>
                                <img src={item.image} alt={item.name} />
                            </Grid>
                            <Grid item xs={7} md={8} sx={{ borderRadius: '1rem'}}>
                                <div className={styles.content}>
                                    <div>
                                        <h2>{item.name}</h2>
                                        <p>desc</p>
                                    </div>
                                    <div className={styles.cost}>
                                        <h2>N {item.price}</h2>
                                        <br></br>
                                    </div>
                                </div>
                                <section className={styles.select}>
                                    <Select name="size" id="" sx={{height: '2rem'}}>
                                        <MenuItem value="kg">kg</MenuItem>
                                        <MenuItem value="g">g</MenuItem>
                                    </Select>
                                        
                                    <div className={styles.counter}>
                                        <Button onClick={decrease}>-</Button>
                                        <p>{quantity}</p>
                                        <Button onClick={increase}>+</Button>
                                    </div>
                                    <Button sx={{color: theme.secondary.main, padding: 0, marginLeft: 'auto'}}>
                                        <Delete />
                                        Delete
                                    </Button>
                                </section>
                            </Grid>
                        </>
                        )
                    })}
                <Button sx={{...btnStyle, width: '50%'}} variant="contained">
                    Order Now
                </Button>
                </Grid>
            </Container>
        </main>
    )
}