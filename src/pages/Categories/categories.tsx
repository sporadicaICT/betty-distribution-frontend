import { useState } from "react";
import { Navbar, ProductCard } from "../../components";
import styles from "./categories.module.scss";

import { Products } from "../../mock/product";
import { tags } from '../../helpers';
import { Typography } from "@mui/material";

export const CategoriesPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string|undefined>(undefined);

    return(
        <>
            <Navbar signedIn={true}/>
            <main className={styles.mainContent}>
                <CategoriesList 
                    activeCategory={selectedCategory} 
                    changeActiveCategory={setSelectedCategory}
                />
                <div className={styles.productsList}>
                    {   
                        //if Selected category is undefined, show all products
                        !selectedCategory ? 
                        Products.map(product => (
                            <ProductCard product={product}/>
                        )) 
                        //else show category specific products
                        : Products.filter(product => product.tags?.includes(selectedCategory)).map(product => (
                            <ProductCard product={product}/>
                        ))
                    }

                </div>
            </main>
        </>
    )
}

type CategoriesListProps = {
    activeCategory?: string;
    changeActiveCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const CategoriesList: React.FC<CategoriesListProps> = (props) => {
    const { activeCategory, changeActiveCategory } = props;
    return(
        <div className={styles.categoriesList}>
            <Typography variant="h6">Our Categories</Typography>
            <ul className={styles.categories}>
            {
                tags.map(tag => (
                <li 
                    className={`${activeCategory === tag ? styles.activeCategory : ''} ${styles.categoryItem}`}
                    onClick={() => changeActiveCategory(tag)}>
                    {tag}
                </li>
                ))
            }
            </ul>
        </div>
    )
}