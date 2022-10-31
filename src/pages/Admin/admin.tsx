import { Navbar, ImagePicker } from "../../components";
import { Button, TextField, Tab, Autocomplete, Snackbar, Typography, useTheme } from "@mui/material";
import React, { useRef, useState } from "react";
import { buttonStyles } from "../../utils/styles.utils";
import styles from './admin.module.scss';
import { TabPanel, TabContext, TabList } from "@mui/lab"

import { Add, Update, FileOpen } from "@mui/icons-material";
import { Product, Brand } from "../../types";

import { firestore, storage } from '../../utils/firebase.config';
import { updateDoc, arrayUnion, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { tags, makeid } from '../../helpers';
import { useForm } from "react-hook-form";



export const AdminPage: React.FC = () => {
    
    const formRef = useRef<HTMLFormElement>(null)
    let base64String:any = '';
    const [products, setProducts] = useState<Product[]>([])
    const [toast, setToast] = useState({ open: false, message: '', color: ''});
    const [brands, setBrands] = useState<any[]>([]);

    const { error, success } = useTheme().palette;

    //Form for adding Products
    const { register, getValues, handleSubmit, setValue } = useForm({
        defaultValues: {
            name: '',
            brand: '',
            unit_price: 0,
            quantity_left: 0,
            size: '',
            description: '',
            tags: ['']
        }
    });

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
        console.log(base64String)
    }

    const submitForm = async(event:any) => {
        const { quantity_left, unit_price } = getValues();
        const productId = makeid(15);
        const newProductRef = doc(firestore, `products/${productId}`)
        const newProductImageRef = ref(storage, `products/${productId}.png`);

        const newProduct: Product = {
            id: productId,
            ...getValues(),
            unit_price: Number(unit_price),
            quantity_left: Number(quantity_left)
        }
        
        try {
            await setDoc(newProductRef, newProduct)
            await uploadString(newProductImageRef, base64String, 'base64')
            .then(async() => {
                const URL = await getDownloadURL(newProductImageRef)
                await updateDoc(newProductRef, {
                    image_url: URL
                })
            })
            setToast({open: true, message: 'Product Sucessfully Added!', color: success.main })
        } catch(e){
            setToast({ open: true, message: "Error while adding Product", color: error.main })
        }

    }

    const [activeTab, setActiveTab] = useState<'add'|'update'|'records'>('add')
    return(
    <React.Fragment>
        <Navbar signedIn={true}/>
        <TabContext value={activeTab}>
            <TabList variant="fullWidth" centered onChange={(e, value) => setActiveTab(value)}>
                <Tab
                    icon={<Add/>}
                    iconPosition="start"
                    label="Add Product"
                    value="add"
                />

                <Tab
                    icon={<Update/>}
                    iconPosition="start"
                    label="Update Product"
                    value="update"
                />

                <Tab
                    icon={<FileOpen/>}
                    iconPosition="start"
                    label="Reports"
                    value="records"
                />
            </TabList>

            <TabPanel value="add">
                    
                    <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
                        <Typography variant="h4">Add Product</Typography>

                        <TextField 
                            variant="outlined" 
                            required 
                            label="Name" 
                            {...register('name')}
                            placeholder="eg. Golden Penny Semovita, Dangote Sugar"
                        />

                        <Autocomplete
                            freeSolo={true} 
                            options={brands}
                            disablePortal
                            id="product-brands"
                            getOptionLabel={(option) => option.name}
                            renderInput={
                                (params) =>
                                <TextField 
                                    {...params}
                                    variant="outlined" 
                                    label="Brand" 
                                    {...register('brand')}
                                    placeholder="eg. Golden Penny, Dangote"
                                    
                                />                            
                            }
                                
                        />


                        <TextField 
                            variant="outlined" 
                            label="Size" 
                            {...register('size')}
                            placeholder="eg. 800g, 1kg, 1mudu"
                            required
                        />

                        <TextField 
                            variant="outlined" 
                            type={'number'} 
                            label="Price" 
                            {...register('unit_price')}
                            required
                            placeholder="How much is this product?"
                        />

                        <TextField 
                            variant="outlined" 
                            label="Quantity" 
                            {...register('quantity_left')}
                            type={'number'}
                            placeholder="The quantity of this product you bought"
                            helperText="You can leave this blank if you haven't bought the product yet"
                        />
                        {/* image upload component goes here*/}
                        <ImagePicker name="image" onChange={getImage}/>

                        <TextField 
                            variant="outlined" 
                            multiline={true} 
                            {...register('description')}
                            label="Description"
                            placeholder="A description of the product"
                        />

                        <Autocomplete 
                            multiple={true}
                            options={tags}
                            disablePortal
                            {...register('tags')}
                            id="product-tags"
                            onChange={(e, val) => setValue('tags', val)}
                            renderInput={
                                (params) => 
                                <TextField 
                                    {...params}
                                    label="Tags"
                                    placeholder="What kind of product is this/ what is it used for?"
                                    helperText="This would be used to seperate into categories"
                                />
                            }
                        />

                        <Button type="submit" variant="contained" sx={buttonStyles}>
                            Add Product
                        </Button>
                    </form>

            </TabPanel>

            <TabPanel value="update">
                <form className={styles.form} onSubmit={submitForm}>
                    <h1>Update Product</h1>
                    <Autocomplete
                        disablePortal
                        options={products}
                        getOptionLabel={(options) => options.name}
                        onChange={(e, val) => console.log(val)}
                        renderInput={(params) => 
                            <TextField 
                                {...params}
                                label="Product Name"
                            />
                        }
                    
                    />
                    <TextField variant="outlined" label="Name" name="name"/>
                    <TextField variant="outlined" label="Quantity" name=""/>
                    {/* image upload component goes here*/}
                    <ImagePicker name="image" onChange={getImage}/>
                    <TextField variant="outlined" multiline={true} label="Description"/>

                    <Button variant="contained" sx={buttonStyles}>
                        Add New Product
                    </Button>
                </form>

            </TabPanel>

            <TabPanel value="records">
                <h2>Records</h2>
            </TabPanel>

        </TabContext>

        <Snackbar
            open={toast.open}
            autoHideDuration={2500}
            onClose={() => setToast({ open: false, message: '', color: '' })}
            message={toast.message}
            color={toast.color}
        />

    </React.Fragment>
    )
}