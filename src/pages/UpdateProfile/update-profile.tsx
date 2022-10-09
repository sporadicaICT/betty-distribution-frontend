import { Button, 
         Modal, SxProps, 
         Tab, Box, TextField, 
         Select, MenuItem, 
         FormControl, FormControlLabel, InputLabel, Grid } from "@mui/material"
import { TabPanel, TabContext, TabList } from "@mui/lab"
import { LocationOn, ShoppingBagOutlined, Person } from "@mui/icons-material";
import React, { useState } from "react";
import { AddressCard, Navbar } from "../../components";

import { backdropStyle, buttonStyles, modalStyle, whiteButtonText } from "../../utils/styles.utils";
import styles from './update-profile.module.scss';
import { Addresses } from "./delivery-addresses";

export const UpdateProfilePage: React.FC = () => {
    const tabStyle:SxProps = {
        textTransform: 'capitalize',
    }

    const btnStyle = {
        ...buttonStyles,
        ...whiteButtonText
    }

    const [activeTab, setActiveTab] = useState("profile");
    const [modalOpen, setModal] = useState(false)
    return(
        <React.Fragment>
            <Navbar signedIn={false}/>
            <TabContext value={activeTab}>
                <TabList onChange={(e, value) => setActiveTab(value)} variant="fullWidth" centered>
                    <Tab 
                        sx={tabStyle}
                        icon={<Person/>}
                        iconPosition="start"
                        value="profile"
                        label="My Profile"
                    />

                    <Tab 
                        sx={tabStyle}
                        icon={<LocationOn/>}
                        iconPosition="start"
                        value="address"
                        label="Delivery Address"
                    />

                    <Tab 
                        sx={tabStyle}
                        icon={<ShoppingBagOutlined/>}
                        iconPosition="start"
                        value="orders"
                        label="My Orders"
                    />
                </TabList>
                <TabPanel value="profile">
                    <form className={styles.form}>
                        <TextField
                            variant="outlined"
                            label="Name"
                            name="name"
                            placeholder="Enter your full name"
                        />

                        <TextField
                            variant="outlined"
                            label="Email"
                            type={'email'}
                            name="email"
                            placeholder="Enter your email address"
                        />

                        <TextField
                            variant="outlined"
                            label="Phone Number"
                            name="phone-number"
                            placeholder="Enter your phone number"
                        />

                        <Button sx={btnStyle} variant="contained">
                            Save Changes
                        </Button>
                    </form>
                </TabPanel>

                <TabPanel value="address">
                    <Grid container>
                    {
                        Addresses.map(address => (
                            <Grid item xs={12} sm={4}>
                               <AddressCard
                                id={address.phone_number} 
                                name={address.name}
                                city={address.city}
                                state={address.state}
                                phoneNumber={address.phone_number}
                                streetAddress={address.street_address}
                                /> 
                            </Grid>
                        ))
                    }
                    </Grid>


                    <Button sx={{ margin:'0 auto' }} onClick={() => setModal(true)}>
                        Add Delivery Address
                    </Button>
                    <Modal sx={backdropStyle} open={modalOpen} onClose={() => setModal(false)}>
                        <Box sx={modalStyle}>

                            <form className={styles.form}>
                                <TextField
                                    variant="outlined"
                                    label="Street Address"
                                    name="street_address"
                                    placeholder="Enter your street address"
                                />

                                <TextField
                                    variant="outlined"
                                    label="City"
                                    name="city"
                                    placeholder="Enter your name of your city"
                                />

                                <FormControl fullWidth>
                                    <InputLabel id="state-label">State</InputLabel>
                                    <Select label="State" labelId="state-label">
                                        <MenuItem>Lagos</MenuItem>
                                        <MenuItem>Federal Capital Territory</MenuItem>
                                        <MenuItem>Kano</MenuItem>
                                    </Select>
                                </FormControl>

                                <Button sx={btnStyle} variant="contained">
                                    Save Changes
                                </Button>
                            </form>

                        </Box>
                    </Modal>
                </TabPanel>


                <TabPanel value="orders">
                    n jdsh
                </TabPanel>


            </TabContext>

        
        </React.Fragment>

    )
}


