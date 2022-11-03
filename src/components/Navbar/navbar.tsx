import Logo from '../../assets/logo.svg';
import styles from './navbar.module.scss';
import { Container, Box } from '@mui/material';
import { Search, PersonOutline, ShoppingCartOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Searchbar } from '../Searchbar/searchbar';

type NavbarProps = {
    signedIn: boolean
}

const boxStyles = {
    display:'flex', 
    alignItems:'center'
}

const containerStyles = {
    ...boxStyles,
    justifyContent: 'space-between'
}

export const Navbar: React.FC<NavbarProps> = ({ signedIn }) => {

    const router = useNavigate();
    const [searchActive, setSearchActive] = useState<boolean>(false);

    return(
        <nav className={styles.navbar}>
            <Container sx={containerStyles}>
                <Box sx={{...boxStyles, gap:'10px'}}>
                    <div className={styles.navbarBox}>
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <h2 className={`header-1 ${styles.companyName}`}>Betty Distribution</h2>
                </Box>

                <Box sx={{...boxStyles, gap:'10px'}}>
                    <Box sx={{...boxStyles, display: !signedIn?'block':'none'}}>
                        <span className={styles.auth}>Login</span>
                        <span className={styles.auth}>Create Account</span>
                    </Box>

                    {
                        !searchActive ? 
                        <div className={styles.navbarBox} onClick={() => setSearchActive(true)}>
                            <Search/>
                        </div>
                        : <Searchbar />
                    }

                    <Box sx={{ display: signedIn?'block':'none' }}>
                        <div onClick={() => router('/update-profile')} className={styles.navbarBox}>
                            <PersonOutline/>
                        </div>
                    </Box>

                    <Box sx={{ display: signedIn?'block':'none' }}>
                        <div onClick={() => router('/cart')} className={`${styles.navbarBox} ${styles.cartbox}`}>
                            <ShoppingCartOutlined fontSize='small'/>
                            <span>
                                <span>&#8358;</span>
                                6000
                            </span>
                        </div>
                    </Box>
                </Box>
            </Container>
        </nav>
    )
}