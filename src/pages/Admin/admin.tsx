import { Navbar, ImagePicker } from "../../components";
import { Button, TextField } from "@mui/material";
import React from "react";
import { buttonStyles } from "../../utils/styles.utils";
import styles from './admin.module.scss';

export const AdminPage: React.FC = () => {
    
    let base64String:any = '';

    //Convert Image from input[type="file"] to base64 string
    const toBase64 = (file:any) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const getImage = async (event:React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.item(0)
        base64String = await toBase64(file)
    }

    const submitForm = (event:any) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        data.image = base64String
        console.log(data)

    }
    return(
    <main>
        <Navbar signedIn={true}/>

        <form className={styles.form} onSubmit={submitForm}>
            <h1>Add Product</h1>
            <TextField variant="outlined" label="Name" name="name"/>
            <TextField variant="outlined" label="Brand" name="brand"/>
            <TextField variant="outlined" label="Size" name=""/>
            <TextField variant="outlined" label="Price" name=""/>
            <TextField variant="outlined" label="Quantity" name=""/>
            {/* image upload component goes here*/}
            <ImagePicker name="image" onChange={getImage}/>
            <TextField variant="outlined" multiline={true} label="Description"/>

            <Button variant="contained" sx={buttonStyles}>
                Add New Product
            </Button>
        </form>
    </main>
    )
}