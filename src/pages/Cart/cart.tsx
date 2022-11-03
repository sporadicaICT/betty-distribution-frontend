import { Container, useTheme, Grid, Typography, SxProps, Button, Select, MenuItem } from "@mui/material"
import { Delete, IndeterminateCheckBox, ArrowDropDown } from "@mui/icons-material";
import React, { useState, useContext, useEffect } from "react"
import { Navbar} from "../../components";
import { Context } from "../../App";
import { buttonStyles, whiteButtonText } from "../../utils/styles.utils";
import styles from "../Cart/cart.module.scss";
import { EmptyCart } from "../../components";


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
            {cartData.length===0 ? <EmptyCart />: 
                <Container sx={{ padding: '3rem'}}>
                    <Grid container columnGap={2.7} rowGap={4} sx={{display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                        {cartData.map((item:any) => {
                            return (
                            <>
                                <Grid item xs={4} md={2}>
                                    <img src={item.image} alt={item.name} />
                                </Grid>
                                <Grid item xs={7} md={8} sx={{ borderRadius: '1rem'}}>
                                    <div className={styles.content}>
                                        <div className={styles.desc}>
                                            <h2>{item.name}</h2>
                                            <span style={{display: 'flex', gap: 10}}>
                                            <p>{item.quantity>0 ? <span className={styles.available}>In Stock</span> : <span className={styles.out}>Out of Stock</span>}</p>
                                            <p className={styles.rprice}>N{item.unit_price}</p>
                                            </span>
                                        </div>
                                        <div className={styles.cost}>
                                            <h2>N {item.unit_price}</h2>
                                            <br></br>
                                        </div>
                                    </div>
                                    <section className={styles.select}>
                                        <h3 style={{width: '10%'}}>{item.size}</h3>
                                            
                                        <div className={styles.counter}>
                                            <Button onClick={decrease}>-</Button>
                                            <p>{quantity}</p>
                                            <Button onClick={increase}>+</Button>
                                        </div>

                                        <div className={styles.delete} style={{marginLeft: 'auto'}}>
                                            <Button className={styles.delete} sx={{color: theme.secondary.main, padding: 0}}>
                                                <Delete />
                                                Delete
                                            </Button>
                                        </div>
                                    </section>
                                </Grid>
                            </>
                            )
                        })}
                    <Button sx={{...btnStyle, width: '50%', marginTop: '0.5rem'}} variant="contained">
                        Order Now
                    </Button>
                    </Grid>
                </Container>
            }
        </main>
    )
}