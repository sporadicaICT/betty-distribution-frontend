import { useState } from "react";
import { Navbar, PriceFilter, ProductCard } from "../../components";
import styles from "./categories.module.scss";

import { Products } from "../../mock/product";
import { tags } from '../../helpers';
import { Container, Typography } from "@mui/material";

export const CategoriesPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string|undefined>(undefined);
    const productPrices = Products.map(product => { return product.unit_price })

    const [filter, setFilter] = useState<{
        active: boolean,
        minPrice?:number,
        maxPrice?: number,
        priceArrangement?: 'ascending'|'descending'
    }>({ active: false, minPrice: 0, maxPrice: Math.max(...productPrices) })
    return(
        <>
            <Navbar signedIn={true}/>
            <main className={styles.mainContent}>
                <CategoriesList 
                    activeCategory={selectedCategory} 
                    changeActiveCategory={setSelectedCategory}
                />
                <section>
                    <div className={styles.filters}>
                        { selectedCategory && <Typography variant="h2">{selectedCategory}</Typography> }
                        <Container sx={{ display:'flex', alignItems:'center' }}>
                            <PriceFilter 
                                setFilter={setFilter} 
                                price={{ initialMinPrice: filter.minPrice, initialMaxPrice: filter.maxPrice }}
                            />
                            <span className={styles.filterOption}></span>
                            <span className={styles.filterOption}></span>
                        </Container>
                    </div>
                    <div className={styles.productsList}>
                        {   
                            //If there's no filtering involved
                            !filter.active ?
                                //if Selected category is undefined, show all products
                                !selectedCategory ? 
                                Products.map(product => (
                                    <ProductCard product={product}/>
                                )) 
                                //else show category specific products
                                : Products.filter(product => product.tags?.includes(selectedCategory)).map(product => (
                                    <ProductCard product={product}/>
                                ))
                            : (
                                !selectedCategory ? 
                                    !filter.priceArrangement ? (
                                        Products.filter(product => {
                                            if(!filter.maxPrice || !filter.minPrice) return
                                            return product.unit_price >= filter.minPrice && product.unit_price <= filter.maxPrice
                                        }).map(product => (
                                            <ProductCard product={product}/>
                                        )) 
                                    )
                                    : filter.priceArrangement === 'ascending' ?
                                        Products.filter(product => {
                                            if(!filter.maxPrice || !filter.minPrice) return
                                            return product.unit_price >= filter.minPrice && product.unit_price <= filter.maxPrice
                                        }).sort((a, b) => a.unit_price - b.unit_price).map(product => (
                                            <ProductCard product={product}/>
                                        )) 
                                    : Products.filter(product => {
                                        if(!filter.maxPrice || !filter.minPrice) return
                                        return product.unit_price >= filter.minPrice && product.unit_price <= filter.maxPrice
                                    }).sort((a, b) => b.unit_price - a.unit_price).map(product => (
                                        <ProductCard product={product}/>
                                    )) 

                                : (
                                    !filter.priceArrangement ? (
                                        Products.filter(product => {
                                            if(!filter.maxPrice || !filter.minPrice) return

                                            return product.unit_price >= filter.minPrice && 
                                            product.unit_price <= filter.maxPrice && 
                                            product.tags?.includes(selectedCategory)
                                        }).map(product => (
                                            <ProductCard product={product}/>
                                        )) 
                                    )
                                    : filter.priceArrangement === 'ascending' ?
                                        Products.filter(product => {
                                            if(!filter.maxPrice || !filter.minPrice) return

                                            return product.unit_price >= filter.minPrice && 
                                            product.unit_price <= filter.maxPrice &&
                                            product.tags?.includes(selectedCategory)
                                        }).sort((a, b) => a.unit_price - b.unit_price).map(product => (
                                            <ProductCard product={product}/>
                                        )) 
                                    : Products.filter(product => {
                                        if(!filter.maxPrice || !filter.minPrice) return

                                        return product.unit_price >= filter.minPrice && 
                                        product.unit_price <= filter.maxPrice &&
                                        product.tags?.includes(selectedCategory)
                                    }).sort((a, b) => b.unit_price - a.unit_price).map(product => (
                                        <ProductCard product={product}/>
                                    )) 

                                )

                            )
                        }

                    </div>
                </section>
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