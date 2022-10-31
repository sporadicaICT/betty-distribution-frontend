import { Box, Button, Container, TextField } from '@mui/material';
import { SetStateAction, useEffect, useState } from 'react';
import { Filters } from '../../types';
import { buttonStyles } from '../../utils/styles.utils';
import { CustomModal } from '../CustomModal/modal';
import styles from './filters.module.scss';

type PriceFilterProps = {
    price: {
        initialMinPrice: number|undefined,
        initialMaxPrice: number|undefined
    },
    setFilter: React.Dispatch<SetStateAction<Filters>>
}

export const PriceFilter: React.FC<PriceFilterProps> = ({ price, setFilter }) => {
    const [optionActive, setOptionActive] = useState<boolean>(false);
    const [newPriceFilter, setNewPriceFilter] = useState<{
        min?: number, max?: number
    }>({ min: price.initialMinPrice, max: price.initialMaxPrice });
    
    useEffect(() => {

    })
    return(
        <>
            <span 
                className={styles.filterOption} 
                onClick={() => setOptionActive(!optionActive)}>
                Price
            </span>

            {
                optionActive ? 
                <CustomModal 
                    dismiss={() => setOptionActive(false)}
                    isOpen={optionActive}>

                    <div className={styles.filterInputContainer}>
                        <TextField
                            value={newPriceFilter.min}
                            label="Minimum Price"
                            type="number"
                            onChange={(e) => setNewPriceFilter({ ...newPriceFilter, max: Number(e.target.value) })}
                        />

                        <TextField
                            value={newPriceFilter.max}
                            label="Maximum Price"
                            type="number"
                            onChange={(e) => setNewPriceFilter({ ...newPriceFilter, max: Number(e.target.value) })}
                        />
                    </div>
                    
                    <div className={styles.filterInputContainer}>
                        <Button 
                            sx={{...buttonStyles}}
                            onClick={() => setFilter({ active: false })}>
                            Remove Filter
                        </Button>

                        <Button 
                            onClick={() => setFilter({ active: true, maxPrice: newPriceFilter.max, minPrice: newPriceFilter.min })}
                            variant="contained" 
                            sx={{...buttonStyles}}
                        >
                            Apply Filter
                        </Button>
                    </div>
                </CustomModal>
                : null
            }

        </>
    )
} 