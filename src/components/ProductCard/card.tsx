import { IconButton, Typography } from "@mui/material"
import { Product } from "../../types";

import { Add } from "@mui/icons-material";

import styles from './card.module.scss';
import { Box } from "@mui/system";

type ProductCardProps = {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return(
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
    )
}