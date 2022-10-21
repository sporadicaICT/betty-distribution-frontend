import { useState } from "react";
import { Navbar, ProductCard } from "../../components";
import styles from "./categories.module.scss";

import { Products } from "../../mock/product";

export const CategoriesPage: React.FC = () => {
    const [selectedBrand, setSelectedBrand] = useState<string|undefined>(undefined);

    return(
        <>
            <Navbar signedIn={true}/>
            <main className={styles.mainContent}>
                <BrandsList />
                <div className={styles.productsList}>
                    {
                        Products.map(product => (
                            <ProductCard product={product}/>
                        ))
                    }

                </div>
            </main>
        </>
    )
}

const BrandsList: React.FC = () => {
    return(
        <div></div>
    )
}