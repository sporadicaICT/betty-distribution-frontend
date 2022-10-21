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
                <Box sx={{ display: 'flex', justifyContent:'flex-end' }}>
                    <IconButton className={styles.addBtn}>
                        <Add/>
                    </IconButton>
                </Box>
                <img src={product.image_url} alt={`${product.name}`}/>
            </div>
            <span>
                <p>{product.name}</p>
                <Typography variant="h2">
                    {product.unit_price}
                </Typography>
            </span>
        </div>
    )
}