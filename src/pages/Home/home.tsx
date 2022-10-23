import { Tabs, Tab, Container, Box, useTheme, Grid, Typography, SxProps, Button } from "@mui/material"
import React, { useState } from "react"
import { Navbar, TabsSection } from "../../components";
import { Link } from "react-router-dom";

import RedBag from '../../assets/red-bag.svg';
import SearchIll from '../../assets/search-illustration.svg';
import ShopByBrand from "../../assets/shop-by-brand-illustration.svg";
import CartIll from '../../assets/cart-illustration.svg';

import styles from './home.module.scss';
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const theme = useTheme().palette;

    const boxStyles = { 
        background: theme.primary.light, 
        borderRadius: 15, 
        width:'100%', 
        height: 400,
    }


    return(
        <React.Fragment>
            <Navbar signedIn={true}/>

            <section className={styles.boxes}>
                <Box sx={boxStyles} className={styles.intro}>
                    <div>
                        <Typography variant="h4">
                            Providing Quality Goods
                        </Typography>
                        <Typography variant="h5">
                            At affordable prices
                        </Typography>
                    </div>
                    <img src={RedBag} alt="Red shopping bag"/>
                </Box>
            </section>


            <section className={styles.boxes}>
                <DescriptionBox
                    title="Search"
                    description="Search through our catalog of great products."
                    image={SearchIll}
                />
                <DescriptionBox
                    title="Shop by Brand"
                    image={ShopByBrand}
                    description="Various brabds to choose from!"
                />
                <DescriptionBox
                    title="Checkout"
                    image={CartIll}
                    description="Have items delivered to your doorstep with ease."
                />
            </section>

            <Link to={'/admin'}>
                <Button sx={{margin: '0 auto'}}>Go to Admin</Button>
            </Link>

        </React.Fragment>
    )
}

type DescriptionBoxProps = {
    title: string,
    description: string,
    image: string
}
const DescriptionBox: React.FC<DescriptionBoxProps> = ({ title, description, image }) => {
    const theme = useTheme().palette;

    const boxStyles: SxProps = {
        background: theme.secondary.main,
        borderRadius: 7
    }
    
    return(
        <Box sx={boxStyles} className={styles.descriptionBox}>
            <div>
                <h3>{title}</h3>
                <Typography variant="subtitle1">
                    {description}
                </Typography>
            </div>
            <img src={image} alt={`${title}`}/>
        </Box>
    )
}