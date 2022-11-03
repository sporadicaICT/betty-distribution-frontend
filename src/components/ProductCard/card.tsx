import { IconButton, Snackbar, Typography } from "@mui/material"
import { Product } from "../../types";

import { Add } from "@mui/icons-material";

import styles from './card.module.scss';
import { Box, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { AppDataContext } from "../../contexts/App";

import { firestore } from '../../utils/firebase.config';
import { updateDoc, collection, addDoc, setDoc, doc } from "firebase/firestore";

type ProductCardProps = {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    
    const { appData } = useContext(AppDataContext);
    const { success, error } = useTheme().palette;

    const [toast, setToast] = useState<{
        open: boolean,
        message?: string,
        color?: string
    }>({ open: false });

    const saveItem = async () => {
        if(!appData || appData.currentUser === null) return
        const id = appData.currentUser.id;
        const ref = doc(firestore, 'user_products', id, 'saved_items', product.id)
    
        await setDoc(ref, {
            ...product
        })
        .then(() =>  setToast({ open: true, message: 'Item have been saved sucessfully', color: success.main }))
        .catch(() => setToast({ open: true, message: 'Error while saving item', color: error.main }))
    }

    return(
        <>
            <div className={styles.productCard}>
                <div className={styles.imageHolder}>
                    <Box sx={{ display: 'flex', justifyContent:'flex-end', padding: '7px 10px 0 0', boxSizing: 'border-box' }}>
                        <span className={styles.addBtn}>
                            <Add fontSize="small"/>
                        </span>
                    </Box>
                    <img src={product.image_url} alt={`${product.name}`}/>
                </div>
                <span>
                    <p>{product.name}</p>
                    <Typography variant="h2">
                        <span>&#8358;</span>{product.unit_price}
                    </Typography>
                </span>
            </div>
        
            <Snackbar 
                open={toast.open}
                autoHideDuration={2000}
                onClose={() => setToast({ open: false })}
                message={toast.message}
                color={toast.color}
            />
        
        </>
    )
}