import { Box, Modal, SxProps, Container, Typography, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { backdropStyle, modalStyle, buttonStyles, whiteButtonText } from "../../utils/styles.utils";

import { PersonOutline, 
    PhoneOutlined, EditOutlined,
    LocationOnOutlined, DeleteOutline } from "@mui/icons-material";
type AddressCardProps = {
    id: string
    name: string,
    streetAddress: string,
    city: string,
    phoneNumber: string,
    state: string
}
export const AddressCard: React.FC<AddressCardProps> = (props) => {
    const [modalOpen, setModal] = useState(false);
    const [alertOpen, setAlert] = useState(false);

    const addressBoxStyle: SxProps = {
        border: 1,
        borderColor: '#131313',
        borderRadius: 7,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 1,
        padding: 1
    }

    const btnStyle = {
        ...buttonStyles,
        ...whiteButtonText
    }

    return(
        <React.Fragment>
            <Box sx={addressBoxStyle}>
                <Container sx={{ display: 'flex' }}>
                    <PersonOutline/>
                    <Typography>{props.name}</Typography>
                </Container>

                <Container sx={{ display: 'flex' }}>
                    <LocationOnOutlined/>
                    <div>
                        <Typography>{props.streetAddress}</Typography>
                        <Typography>{props.city}</Typography>
                        <Typography>{props.state}</Typography>
                    </div>
                </Container>

                <Container sx={{ display: 'flex' }}>
                    <PhoneOutlined/>
                    <Typography>{props.phoneNumber}</Typography>
                </Container>

                <Container sx={{ display: 'flex', gap: 2 }}>
                    <Button onClick={() => setAlert(true)} sx={{ textTransform: 'capitalize' }}>
                        <DeleteOutline/>
                        Delete Address
                    </Button>
                    
                    <Button onClick={() => setModal(true)} sx={{ textTransform: 'capitalize' }}>
                        <EditOutlined/>
                        Edit Address
                    </Button>
                </Container>
            </Box>

            {/* Alert to ask if they want to really delete */}
            <Modal sx={backdropStyle} open={alertOpen} onClose={() => setAlert(false)}>
                <Box className="modal-form-container" sx={modalStyle}>
                    <h2>Delete Address?</h2>
                    <Typography variant="subtitle1">
                        Are you sure you want to delete the delivery address?
                    </Typography>

                    <Container>
                        <Button variant="contained" color="error">
                            Yes
                        </Button>
                        <Button>
                            No
                        </Button>
                    </Container>
                </Box>
            </Modal>

            {/* Modal Pops up for Edit Address*/}
            <Modal open={modalOpen} onClose={() => setModal(false)} sx={backdropStyle}>
                <Box className="modal-form-container" sx={modalStyle}>
                    <form className="form">
                        <TextField
                            value={props.streetAddress}
                            variant="outlined"
                            label="Street Address"
                            name="street_address"
                            placeholder="Enter your street address"
                        />

                        <TextField
                            variant="outlined"
                            label="City"
                            value={props.city}
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

        </React.Fragment>
    )
}