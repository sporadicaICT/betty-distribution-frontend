import { Search } from '@mui/icons-material';
import { Input, InputBase, Paper, SxProps, Typography } from '@mui/material';
import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Product } from '../../types';
import { firestore } from '../../utils/firebase.config';

import styles from './searchbar.module.scss';

export const Searchbar: React.FC = () => {
    const [queryText, setQueryText] = useState("");
    const [searchedProducts, setSearchedProducts] = useState<Product[]>([])
    const productsRef = collection(firestore, 'products')

    useEffect(() => {
        if(!queryText) return
        const queryRef = query(productsRef, where('name', '==', queryText), limit(5))
        getDocs(queryRef)
        .then(docs => {
            let productsArray: any[] = []
            docs.forEach(doc => {
                productsArray = [...productsArray, doc.data()]
            })
            setSearchedProducts(productsArray)
        })
        .catch(() => {})
    }, [queryText])

    const searchContainer: SxProps = {
        padding: '0 0.5em',
        display: 'flex',
        alignItems: 'center'
    }
    return(
        <>
            <Paper sx={searchContainer}>
                <Search/>
                <InputBase placeholder="Search for any product" type="search"/>
            </Paper>

            {
                searchedProducts && 
                <ul className={styles.productList}>
                {
                    searchedProducts.map(product => (
                        <li className={styles.productListItem}  key={product.id}>
                            <img src={product.image_url} alt={`${product.name}`}/>

                            <div>
                                <Typography variant="h4">{product.name}</Typography>
                                <Typography variant="subtitle1">{product.size}</Typography>
                            </div>
                        </li>
                    ))
                }
                </ul>
            }
        </>
    )
}